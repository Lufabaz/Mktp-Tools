import React, {useState} from 'react'

export default function InputItems({onInputItem}) {
    const [itemInputNumber, setItemInputNumber] = useState("")
    const [itemInputToken, setItemInputToken] = useState("")
    const [enableInputToken, setEnableInputToken] = useState(false)

    const handleInputItem = ({target}) => {
        if (target.id === 'item') {
            setItemInputNumber(target.value)
        } else if (target.id === 'token') {
            setItemInputToken(target.value)
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        onInputItem(itemInputNumber,itemInputToken)
    }

    const handleAccessToken = () => {
        setEnableInputToken(!enableInputToken)
    }


    return (
        <div>
          <div style={styles.flexRow}>

            <form onSubmit={handleFormSubmit}>
              <div className="input-field">
                <input style={styles.input} id="item" type="text" className="validate" required onChange={handleInputItem}/>
                <label style={styles.defaultColorText} htmlFor="item" className="active">
                  <b>Insira o ID do anúncio</b>
                </label>
                <span style={styles.defaultColorText} className="helper-text">
                  <i>Ex.: MLB1432853832.</i>
                </span>
              </div>
            </form>

{/*             <i onClick={handleAccessToken} style={{marginLeft: '15px'}} className="material-icons">vpn_key</i>*/}
            <div className="tooltip">
              <i onClick={handleAccessToken} style={{marginLeft: '15px'}} className="material-icons">vpn_key</i>
              <span className="tooltiptext">Insira token (opcional)</span>
            </div>


            {enableInputToken && <form style={{marginLeft: '15px'}} onSubmit={handleFormSubmit}>
              <div className="input-field">
                <input style={styles.input} id="token" type="text" className="validate" onChange={handleInputItem}/>
                <label style={styles.defaultColorText} htmlFor="token" className="active">
                    <b>Insira o access token</b>
                </label>
                <span style={styles.defaultColorText} className="helper-text">
                    <i>Opcional para consulta de itens.</i>
                </span>
              </div>
            </form>}

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
    input: {
        width: 'auto'
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
