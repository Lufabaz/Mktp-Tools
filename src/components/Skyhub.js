import React, { useState } from 'react'
import api from '../Services/apiSkyhub.js'
import CreateTestOrder from './skyhub/CreateTestOrder'

const handlePostTestOrder = async (event) => {
  
  event.preventDefault()

  try {
    const postTestOrder = await api.postTestOrders()
    console.log(postTestOrder)
  } catch (err) {
    console.log(err)
  }
}

export default function Skyhub() {
  return (
    <div>
      <div style={styles.buttonsItemsConsult}>
        <button style={styles.buttonsItems} className="waves-effect waves-light btn-small disabled">Consultas:</button>
        <button id="back" onClick={null} style={styles.buttonsItems} className="blue waves-effect waves-light btn-small">Voltar</button>
      </div>
      
      <div style={styles.buttonsMenu}>
        <button id="barcode" onClick={null} style={styles.buttonsItems} className="waves-effect waves-light btn-small">Código de Barras</button>
        <button id="items" onClick={null} style={styles.buttonsItems} className="waves-effect waves-light btn-small">Itens</button>
        <button id="categ" onClick={null} style={styles.buttonsItems} className="waves-effect waves-light btn-small">Categorias</button>
      </div>

      <div style={styles.flexRow}>
        <div style={styles.flexRowTwo}>
          <div>
            <CreateTestOrder onInputItem={null} />
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  h1Consult: {
    fontSize: '15px',
    fontWeight: 'bold'
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
  },
  flexRowTwo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid lightgray',
    borderRadius: '5px',
    width: 'max-content',
    padding: '10px'
  },
  flexRowEan: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid lightgray',
    borderRadius: '5px',
    width: 'max-content',
    padding: '10px'
  },
  buttonsMenu: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px',
    marginLeft: '20px',
  },
  buttonsItems: {
    marginRight: '10px',
    marginBottom: '5px'
  },
  buttonsItemsConsult: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '20px',
    marginTop: '15px',
  }
}