import React, { useState } from 'react'
import EanResult from './meli/EanResult'
import EanInput from './meli/EanInput'
import Items from './meli/Items'
import api from '../Services/apiMeli.js'

export default function Meli() {
  const [eanTypeResult, setEanTypeResult] = useState('')
  const [eanLengthResult, setEanLengthResult] = useState('')
  const [eanValidResult, setEanValidResult] = useState('')

  const handleFormSubmitItem = async (event) => {

    /* Realiza a requisição na API do Meli através do módulo /Services/apiMeli.js */
    try {
      let jsonItem = await api.getItems(event)
      console.log(jsonItem)

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

  return (
    <div>
      {/* Flex (lado a lado) */}
      <div className="row" style={styles.flexRow}>
        <div style={styles.flexRowTwo}>
          {/* Consulta EAN */}
          <div>
            <EanInput
              onInputEan={handleFormSubmitEan}
              onEmptyInput={clearResultEmpty}
            />
          </div>

          <div>
            {eanLengthResult && (
              <EanResult
                type={eanTypeResult}
                length={eanLengthResult}
                valid={eanValidResult}
              />
            )}
          </div>
        </div>
      </div>

      {/* Consulta Items */}
      <div>
        <Items onInputItem={handleFormSubmitItem} />
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
    padding: '30px',
    border: '1px solid lightgray',
    borderRadius: '5px',
    margin: '15px',
    width: '970px',
  },
  flexRowTwo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
    marginLeft: '20px',
  },
}
