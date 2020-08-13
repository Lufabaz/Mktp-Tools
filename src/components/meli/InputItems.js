import React, {useState} from 'react'

export default function InputItems({onInputItem}) {
    const [itemInputNumber, setItemInputNumber] = useState("")
    const [itemInputToken, setItemInputToken] = useState("")

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


    return (
        <div>
            <div style={
                styles.div
            }>
                <div style={
                    styles.flexRow
                }>
                    <div>
                        <h1 style={
                            styles.h1Consult
                        }>Consulta de Itens:</h1>
                    </div>

                    <div style={
                        styles.divInput
                    }>
                        <form className="input-field col s12"
                            onSubmit={handleFormSubmit}>
                            <input style={
                                    styles.input
                                }
                                id="item"
                                type="text"
                                className="validate"
                                required
                                onChange={handleInputItem}/>
                            <label htmlFor="item" className="active">
                                <b>Insira o código MLB do anúncio.</b>
                            </label>
                            <span className="helper-text">
                                <i>Ex.: MLB1432853832.</i>
                            </span>
                        </form>
                    </div>

                    <div style={
                        styles.divInput
                    }>
                        <form className="input-field col s12"
                            onSubmit={handleFormSubmit}>
                            <input style={
                                    styles.input
                                }
                                id="token"
                                type="text"
                                className="validate"
                                onChange={handleInputItem}/>
                            <label htmlFor="token" className="active">
                                <b>Insira o access token da conta Meli.</b>
                            </label>
                            <span className="helper-text">
                                <i>Opcional para consulta de itens.</i>
                            </span>
                        </form>
                    </div>
                </div>
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
        flexDirection: 'row'
    },
    input: {
        width: '250px'
    },
    divInput: {
        marginLeft: '20px'
    }
}
