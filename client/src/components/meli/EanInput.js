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
      <div style={styles.flexRowTwo}>
        <form onSubmit={handleFormSubmit}>
          <div className="input-field">
            <input style={styles.input} id="ean" type="number" className="validate" onChange={handleInputEan} /><br />
            <label style={styles.defaultColorText} htmlFor="ean" className="active">
              <b>Insira um código de barras</b>
            </label>
            <span style={styles.defaultColorText} className="helper-text">
              <i>Ex.: EAN, GTIN, UPC, ISBN, JAN e outros</i>
            </span>
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
  defaultColorText: {
    color: 'black'
  }
}
