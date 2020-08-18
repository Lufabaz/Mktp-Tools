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
              <a id="meli" href="" onClick={clickResource} style={styles.buttonsItems} className="waves-effect waves-light btn-small">Meli</a>
              <a id="magalu" href="" onClick={clickResource} style={styles.buttonsItems} className="waves-effect waves-light btn-small">Magalu</a>
              <a id="cnova" href="" onClick={clickResource} style={styles.buttonsItems} className="waves-effect waves-light btn-small">Cnova</a>
              <a id="carrefour" href="" onClick={clickResource} style={styles.buttonsItems} className="waves-effect waves-light btn-small">Carrefour</a>
              <a id="re" href="" onClick={clickResource} style={styles.buttonsItems} className="waves-effect waves-light btn-small">Ricardo Eletro</a>
              <a id="zoom" href="" onClick={clickResource} style={styles.buttonsItems} className="waves-effect waves-light btn-small">Zoom</a>
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
