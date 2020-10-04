import React, { useState } from "react";

export default function Zoom({onClickResource}) {

  const [inputNotificationId, setInputNotificationId] = useState(null)
  const [inputOrderNumber, setInputOrderNumber] = useState(null)
  const [inputNotifyStatus, setInputNotifyStatus] = useState(null)
  const [resultNotifyStatus, setResultNotifyStatus] = useState(null)

  const clickResource = (event) => {
      event.preventDefault()
  
      if (event.target.id === "back") {
        let flag = false
        onClickResource(event.target.id,flag)
        return
      }
    }

  const handleInputItem = ({target}) => {
    if (target.id === "notificationId") {
      setInputNotificationId(target.value)
      return
    }

    if (target.id === "orderNumber") {
      setInputOrderNumber(target.value)
      return
    }

    if (target.name === "statusNotify") {
      setInputNotifyStatus(target.value)
      return
    }
}

  const clickSubmitNotification = (event) => {
    event.preventDefault()
    
    let urlSkyhubZoomNotification = `https://in.skyhub.com.br/zoom_marketplace/${inputNotificationId}/notification`

    let bodyNotification = {
      "orderNumber": inputOrderNumber,
      "status": inputNotifyStatus,
      "controller": "zoom_marketplace_notifications",
      "action": "notify", 
      "zoom_marketplace_id": inputNotificationId,
      "zoom_marketplace_notification": {
          "orderNumber": inputOrderNumber,
          "status": inputNotifyStatus
      }
    }

    fetchApiSkyHubForZoom(urlSkyhubZoomNotification,bodyNotification)
  }

  const fetchApiSkyHubForZoom = (url,body) => {
    console.log(url)
    console.log(body)

    const postApi = async () => {
      fetch(url,{
      method: 'POST',
      mode: 'cors',
      cache: 'default',
      body: body,
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
      }).then((response) => { 
        console.log(response.headers.get('Content-Type'));
        console.log(response.headers.get('Date'));
    
        console.log(response.status);
        console.log(response.type);
        console.log(response.url);
      }).catch((err) => {
        console.log("fetch error: "+ err)
      })
    }
    postApi()

/*     try {

      console.log("sucesso")
      setResultNotifyStatus(postApi)
      
    } catch (err) {
      console.log("erro: " +err)
      setResultNotifyStatus(err)
    } */
  }

  return (
    <div>
      <div style={styles.buttonsItemsConsult}>
        <button
          style={styles.buttonsItems}
          className="waves-effect waves-light btn-small disabled"
        >
          Ações:
        </button>
        <button
          id="back"
          onClick={clickResource}
          style={styles.buttonsItems}
          className="blue waves-effect waves-light btn-small"
        >
          Voltar
        </button>
      </div>

      <div style={styles.buttonsMenu}>
        <button
          id="notify"
          onClick={clickResource}
          style={styles.buttonsItems}
          className="waves-effect waves-light btn-small"
        >
          Notificação de Pedidos
        </button>
      </div>

      <div style={styles.flexRow}>
        <div>
          <form onSubmit={clickSubmitNotification}>

            <input id="notificationId" type="text" className="validate" required onChange={handleInputItem}/>
            <label htmlFor="notificationId">
              ID de Notificação
            </label>

            <input id="orderNumber" type="text" className="validate" required onChange={handleInputItem}/>
            <label htmlFor="orderNumber">
              Número do Pedido
            </label>

            <p>
              <label htmlFor="New">
                <input type="radio" id="New" name="statusNotify" value="New" onChange={handleInputItem}/>
                <span>Status Pendente</span>
              </label><br/>
            </p>
            <p>
              <label htmlFor="ApprovedPayment">
                <input type="radio" id="ApprovedPayment" name="statusNotify" value="ApprovedPayment" onChange={handleInputItem}/>
                <span>Status Aprovado</span>
              </label><br/>
            </p>
            <p>
              <label htmlFor="Canceled">
                <input type="radio" id="Canceled" name="statusNotify" value="Canceled" onChange={handleInputItem}/>
                <span>Status Cancelado</span>
              </label><br/>
            </p>

            <button className="btn waves-effect waves-light" type="submit" name="action">Notificar
              <i className="material-icons right">send</i>
            </button>
            
          </form>
        </div>

{/*         <div>
          {resultNotifyStatus && <span>{resultNotifyStatus}</span>}
        </div> */}

      </div>
    </div>
  );
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
  