import React, { useState } from 'react'
import EanResult from './meli/EanResult'
import EanInput from './meli/EanInput'
import InputItems from './meli/InputItems'
import ResultItems from './meli/ResultItems'
import api from '../Services/apiMeli.js'
import * as pretty from '../Helpers/jsonBeauty.ts'

export default function Meli({onClickResource}) {
  const [eanTypeResult, setEanTypeResult] = useState('')
  const [eanLengthResult, setEanLengthResult] = useState('')
  const [eanValidResult, setEanValidResult] = useState('')
  const [itemsGetResult, setItemsGetResult] = useState('')
  const [barcodeComponent, setBarcodeComponent] = useState(false)
  const [itemsComponent, setItemsComponent] = useState(false)
  const [categoryComponent, setCategoryComponent] = useState(false)

  const handleFormSubmitItem = async (item,token) => {

    /* Realiza a requisição na API do Meli através do módulo /Services/apiMeli.js */
    try {
      let jsonItem = await api.getItems(item,token)
      let stringPretty = pretty.prettyJson(jsonItem)
/*       let highligth = pretty.syntaxHighlight(stringPretty) */
      setItemsGetResult(stringPretty)
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
    } else {
      setItemsComponent(false)
      setBarcodeComponent(false)
      setCategoryComponent(false)
      window.alert("As ferramentas selecionadas ainda estão em desenvolvimento.")
    }

  }

  return (
    <div>
    <div style={styles.buttonsMenu}>
      <button style={styles.buttonsItems} className="waves-effect waves-light btn-small disabled">Consultas:</button>
      <button id="barcode" onClick={clickResource} style={styles.buttonsItems} className="waves-effect waves-light btn-small">Código de Barras</button>
      <button id="items" onClick={clickResource} style={styles.buttonsItems} className="waves-effect waves-light btn-small">Itens</button>
      <button id="categ" onClick={clickResource} style={styles.buttonsItems} className="waves-effect waves-light btn-small disabled">Categorias</button>
      <button id="back" onClick={clickResource} style={styles.buttonsItems} className="blue waves-effect waves-light btn-small">Voltar</button>
    </div>
       

    {/* Flex (lado a lado) */}
      {barcodeComponent && <div className="row" style={styles.flexRow}>
        {/* Consulta EAN */}
        <div style={styles.flexRowTwo}>
          <div>
            <EanInput onInputEan={handleFormSubmitEan} onEmptyInput={clearResultEmpty} />
          </div>

          <div>
            {eanLengthResult && (<EanResult type={eanTypeResult} length={eanLengthResult} valid={eanValidResult} />)}
          </div>
        </div>
      </div>}

      {/* Consulta Itens */}
      <div>
        {itemsComponent && <InputItems onInputItem={handleFormSubmitItem} />}
      </div>
      <div>
        {itemsGetResult && <ResultItems onGetResult={itemsGetResult} />}
      </div>

      {/* Consulta Categorias */}
      <div>
        {categoryComponent && <div>categorias</div>}
      </div>
    </div>
  )
}

const styles = {
  h1Consult: {
    fontSize: '20px',
    width: '250px',
    
  },
  h1Result: {
    fontSize: '20px',
    /* width: '250px', */
    
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    /* border: '1px solid lightgray', */
    borderRadius: '5px',
    margin: '15px',
    width: 'auto',
  },
  flexRowTwo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid lightgray',
    borderRadius: '5px',
    width: 'max-content',
    padding: '20px'
  },
  flexRowResult: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    /*     padding: '30px',
     */ margin: '15px',
  },
  input: {
    width: '350px',
  },
  span: {
    width: '150px',
    marginLeft: '30px',
  },
  divInput: {
    marginLeft: '30px',
  },
  buttonsMenu: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15px',
    width: 'auto',
    marginLeft: '20px',
    marginTop: '15px',
  },
  buttonsItems: {
    marginRight: '10px',
    marginBottom: '5px'
  }
}
