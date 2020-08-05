import React from 'react'
import { useState } from 'react'

export default function EanInput({onInputEan, onEmptyInput}) {
  const [eanInputNumber, setEanInputNumber] = useState("")

  const handleInputEan = ({target}) => {
    setEanInputNumber(target.value)

    if (target.value <= 5) {
      onEmptyInput(null)
    }
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    onInputEan(eanInputNumber)
  }

  return (
    <div>
      {/* Formulário de inserção */}
      <div>
        <form onSubmit={handleFormSubmit}>
          {/* Flex (lado a lado) */}
          <div>
            <div style={styles.flexRowTwo}>
              <div>
                <h1 style={styles.h1Consult}>Consulta Código de Barras:</h1>
              </div>
              <div style={styles.divInput} className="input-field col s12">
                <input style={styles.input} id="ean" type="number" className="validate" onChange={handleInputEan} />
                <label htmlFor="ean" className="active">
                  <b>Insira aqui o código de barras para consulta.</b>
                </label>
                <span className="helper-text">
                  <i>Ex.: EAN, GTIN, UPC, ISBN, etc.</i>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

const styles = {
  h1Consult: {
    fontSize: '20px',
    width: '250px',
    marginBottom: '45px',
  },
  h1Result: {
    fontSize: '20px',
    /* width: '250px', */
    marginBottom: '45px',
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
