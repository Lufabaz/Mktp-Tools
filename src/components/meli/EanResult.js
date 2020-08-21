import React from 'react'

export default function EanResult({type, length, valid}) {

  let validColor = valid === "Sim" ? "#16a085" : "#e74c3c"

  return (
    <div>

      <div style={styles.flexRow} >

{/*         <div>
          <h1 style={styles.h1Result}>Resultado:</h1>
        </div> */}

        <div>
          Tipo: <span style={{fontWeight: 'bold'}}>{type}</span> <br />
          Digitos: <span style={{fontWeight: 'bold'}}>{length}</span> <br />
          Válido: <span style={{color: `${validColor}`, fontWeight: 'bold'}}>{valid}</span>
        </div>

      </div>

    </div>
  )
}

const styles = {
  h1Result: {
    fontSize: '15px',
    fontWeight: 'bold'
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'auto',
    marginLeft: '10px'
  }
}