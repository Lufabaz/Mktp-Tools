import React from 'react'

export default function Preloader({onClickResource}) {

  const clickResource = (event) => {
    event.preventDefault()
    const flag = true
    onClickResource(event.target.id,flag)
  }
  
    return (
        <div>
            <div style={styles.divLoader}>
            <div>Selecione um marketplace:</div>
            <div style={styles.buttonsMenu}>
              <button id="meli" onClick={clickResource} style={styles.buttonsItems} className="waves-effect waves-light btn-small">Meli</button>
              <button id="magalu" onClick={clickResource} style={styles.buttonsItems} className="waves-effect waves-light btn-small disabled">Magalu</button>
              <button id="cnova" onClick={clickResource} style={styles.buttonsItems} className="waves-effect waves-light btn-small disabled">Cnova</button>
              <button id="carrefour" onClick={clickResource} style={styles.buttonsItems} className="waves-effect waves-light btn-small disabled">Carrefour</button>
              <button id="re" onClick={clickResource} style={styles.buttonsItems} className="waves-effect waves-light btn-small disabled">Ricardo Eletro</button>
              <button id="zoom" onClick={clickResource} style={styles.buttonsItems} className="waves-effect waves-light btn-small disabled">Zoom</button>
            </div>
            <div style={{width: '60%', marginTop: '15px'}}>
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            </div>
            </div>
        </div>
    )
}

const styles = {
    divLoader: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px',
        width: 'auto'
    },
    buttonsMenu: {
      marginLeft: '20px',
      marginTop: '15px',
    },
    buttonsItems: {
      marginRight: '10px',
      marginBottom: '5px'
    }
}
