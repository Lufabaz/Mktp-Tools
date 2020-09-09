import React, { useState } from 'react'
import EanResult from './meli/EanResult'
import EanInput from './meli/EanInput'
import InputItems from './meli/InputItems'
import ResultItems from './meli/ResultItems'
import CategoryInput from './meli/CategoryInput'
import api from '../Services/apiMeli.js'

export default function Meli({onClickResource}) {
  const [eanTypeResult, setEanTypeResult] = useState('')
  const [eanLengthResult, setEanLengthResult] = useState('')
  const [eanValidResult, setEanValidResult] = useState('')
  const [itemsGetResult, setItemsGetResult] = useState('')
  const [barcodeComponent, setBarcodeComponent] = useState(false)
  const [itemsComponent, setItemsComponent] = useState(false)
  const [categoryComponent, setCategoryComponent] = useState(false)


  const handleFormSubmitCategory = async (category,item) => {
    /* Realiza a requisição na API do Meli através do módulo /Services/apiMeli.js */
    try {
      let jsonItem = await api.getCategory(category,item)
      setCategoryComponent(jsonItem)
      console.log(jsonItem)
      
    } catch (err) {
      console.log(`Erro ao consultar EAN. Erro: ${err}`)
    }
  }

  const handleFormSubmitItem = async (item,token) => {

    /* Realiza a requisição na API do Meli através do módulo /Services/apiMeli.js */
    try {
      let jsonItem = await api.getItems(item,token)
      setItemsGetResult(jsonItem)
    } catch (err) {
      console.log(`Erro ao consultar EAN. Erro: ${err}`)
    }
  }

  const handleFormSubmitEan = async (event) => {

    /* Realiza a requisição na API do Meli através do módulo /Services/apiMeli.js */
    try {
      let jsonEan = await api.getEanValidator(event)
      setEanLengthResult(await jsonEan.product_identifier.length)
      setEanTypeResult(await jsonEan.type)
  
      await jsonEan.valid === true
        ? setEanValidResult('Sim')
        : setEanValidResult('Não')

    } catch (err) {
      console.log(`Erro ao consultar EAN. Erro: ${err}`)
    }
  }

  const clearResultEmpty = (_) => {
    setEanLengthResult('')
  }

  const clickResource = (event) => {
    event.preventDefault()

    if (event.target.id === "back") {
      let flag = false
      onClickResource(event.target.id,flag)
      return
    } else if (event.target.id === "barcode") {
      setBarcodeComponent(true)
      setItemsComponent(false)
      setCategoryComponent(false)
      return
    } else if (event.target.id === "items") {
      setItemsComponent(true)
      setBarcodeComponent(false)
      setCategoryComponent(false)
    } else if (event.target.id === "categ") {
      setCategoryComponent(true)
      setItemsComponent(false)
      setBarcodeComponent(false)
    } else {
      setItemsComponent(false)
      setBarcodeComponent(false)
      setCategoryComponent(false)
      window.alert("As ferramentas selecionadas ainda estão em desenvolvimento.")
    }

  }

  return (
    <div>
 
    <div style={styles.buttonsItemsConsult}>
      <button style={styles.buttonsItems} className="waves-effect waves-light btn-small disabled">Consultas:</button>
      <button id="back" onClick={clickResource} style={styles.buttonsItems} className="blue waves-effect waves-light btn-small">Voltar</button>
    </div>
      
    <div style={styles.buttonsMenu}>
      <button id="barcode" onClick={clickResource} style={styles.buttonsItems} className="waves-effect waves-light btn-small">Código de Barras</button>
      <button id="items" onClick={clickResource} style={styles.buttonsItems} className="waves-effect waves-light btn-small">Itens</button>
      <button id="categ" onClick={clickResource} style={styles.buttonsItems} className="waves-effect waves-light btn-small">Categorias</button>
    </div>
       
      {/* Flex Column) */}
      {barcodeComponent && <div style={styles.flexRow}>
        {/* EAN INPUT */}
        <div>
          <h1 style={styles.h1Consult}>Consulta Código de Barras:</h1>
        </div>

        <div style={styles.flexRowEan}>
          <div>
            <EanInput onInputEan={handleFormSubmitEan} onEmptyInput={clearResultEmpty} />
          </div>

          <div>
            {eanLengthResult && (<EanResult type={eanTypeResult} length={eanLengthResult} valid={eanValidResult} />)}
          </div>
        </div>

      </div>}

      {/* Consulta Itens */}

      {itemsComponent && <div style={styles.flexRow}>

        <div>
            <h1 style={styles.h1Consult}>Consulta de Itens:</h1>
        </div>

        <div style={styles.flexRowTwo}>
          <div>
            {itemsComponent && <InputItems onInputItem={handleFormSubmitItem} />}
          </div>

          <div>
            {itemsGetResult && <ResultItems onGetResult={itemsGetResult} />}
          </div>
        </div>

      </div>}

      {/* Consulta Categorias */}

      {categoryComponent && <div style={styles.flexRow}>

        <div>
          <h1 style={styles.h1Consult}>Consulta de Categorias:</h1>
        </div>
        
        <div style={styles.flexRowTwo}>
          <div>
            {categoryComponent && <CategoryInput onInputItem={handleFormSubmitCategory} /> }
          </div>
        </div>
      </div>}

    </div>
  )
}

const styles = {
  h1Consult: {
    fontSize: '15px',
    fontWeight: 'bold'
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
  },
  flexRowTwo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid lightgray',
    borderRadius: '5px',
    width: 'max-content',
    padding: '10px'
  },
  flexRowEan: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid lightgray',
    borderRadius: '5px',
    width: 'max-content',
    padding: '10px'
  },
  buttonsMenu: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px',
    marginLeft: '20px',
  },
  buttonsItems: {
    marginRight: '10px',
    marginBottom: '5px'
  },
  buttonsItemsConsult: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '20px',
    marginTop: '15px',
  }
}
