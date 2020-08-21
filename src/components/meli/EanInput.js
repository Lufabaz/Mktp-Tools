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
              <div className="input-field">
                <input style={styles.input} id="ean" type="number" className="validate" onChange={handleInputEan} /><br />
                 <label htmlFor="ean" className="active">
                  Insira um código de barras
                </label>
                <span className="helper-text">
                  <i>Ex.: EAN, GTIN, UPC, ISBN, JAN, etc.</i>
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
    fontSize: '15px',
    fontWeight: 'bold'
  },
  flexRowTwo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: 'auto',
  },
  divInput: {
    marginLeft: '20px',
  },
}
