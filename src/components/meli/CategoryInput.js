import React, { useState } from 'react'

export default function CategoryInput({onInputItem}) {
    const [itemInputNumber, setItemInputNumber] = useState(null)
    const [categoryInputNumber, setCategoryInputNumber] = useState(null)

    const handleInputItem = ({target}) => {
        if (target.value.length >= 7 && target.value.length <= 10) {
            console.log(target.value)
            setCategoryInputNumber(target.value)
            setItemInputNumber(null)
            return
        } else if (target.value.length > 10) {
            console.log(target.value)
            setItemInputNumber(target.value)
            setCategoryInputNumber(null)
            return
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        onInputItem(categoryInputNumber,itemInputNumber)
    }

    return (
        <div>
            <div style={styles.flexRow}>
                <form onSubmit={handleFormSubmit}>
                <div className="input-field">
                    <input style={styles.input} id="categ" type="text" className="validate" required onChange={handleInputItem}/>
                    <label style={styles.defaultColorText} htmlFor="categ" className="active">
                    <b>Informe o ID da categoria ou item</b>
                    </label>
                    <span style={styles.defaultColorText} className="helper-text">
                    <i>Ex.: MLB270276</i>
                    </span>
                </div>
                </form>
            </div>
        </div>
    )
}

const styles = {
    div: {
        padding: '30px',
        border: '1px solid lightgray',
        borderRadius: '5px',
        margin: '15px',
        width: '970px'
    },
    h1Consult: {
        fontSize: '20px',
        width: '250px'
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    flexRowIcons: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        width: 'auto',
        marginTop: '15px'
    },
    divInput: {
        marginLeft: '20px'
    },
    defaultColorText: {
        color: 'black'
    },
    tooltip: {
      visibility: 'hidden',
      width: '120px',
      backgroundColor: 'black',
      color: '#fff',
      textAlign: 'center',
      borderRadius: '6px',
      padding: '5px 0',

      position: 'absolute',
      zIndex: '1',
      top: '-5px',
      left: '105%'
    },
      tooltiptext: {
        visibility: 'hidden',
        width: '120px',
        backgroundColor: 'black',
        color: '#fff',
        textAlign: 'center',
        borderRadius: '6px',
        padding: '5px 0',
  
        position: 'absolute',
        zIndex: '1',
        top: '-5px',
        left: '105%'
      }
}