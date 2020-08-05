import React from 'react'

export default function EanResult({type, length, valid}) {

  let validColor = valid === "Sim" ? "#16a085" : "#e74c3c"

  return (
    <div>
      <div style={styles.flexRowResult}>
        <h1 style={styles.h1Result}>Resultado:</h1>
        <span style={styles.span}>
          <div>
            Tipo: <span style={{fontWeight: 'bold'}}>{type}</span> <br />
            Digitos: <span style={{fontWeight: 'bold'}}>{length}</span> <br />
            Válido: <span style={{color: `${validColor}`, fontWeight: 'bold'}}>{valid}</span>
          </div>
        </span>
      </div>
    </div>
  )
}

const styles = {
  h1Consult: {
    fontSize: '20px',
    width: '250px',
    marginBottom: '35px',
  },
  h1Result: {
    fontSize: '20px',
    /* width: '250px', */
    marginBottom: '45px',
    alignItems: 'center',

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
    marginBottom: '10px',

  },
  divInput: {
    marginLeft: '20px',
  },
}