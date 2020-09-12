import React from 'react'

export default function CategoryResumeResult({onGetResult}) {
let id = 0

  return (
    <div style={styles.flexRow}>

      <div style={styles.flexRow}>
        Status: {onGetResult && onGetResult.settings.status}
        <br />
      </div>

      <div style={styles.flexRow}>
        Categoria: {onGetResult && onGetResult.path_from_root.map(data => {
          id += 1
          return (
            <span key={id}>{` > "${data.name}"`}</span>
          )
        })}
        <br />
      </div>

      <div style={styles.flexRow}>
        Métodos de Envio: {onGetResult && onGetResult.settings.shipping_modes.map(data => {
          id += 1
          return (
            <li key={id}>{data}</li>
            )
        })}
      </div>

    </div>
  )
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  }
}