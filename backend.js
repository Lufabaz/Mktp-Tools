import express from 'express'
import axios from 'axios'
import cors from 'cors'
import path from 'path'

import dotenv from 'dotenv'
dotenv.config();

const app = express()

app.use(cors())

// Vinculando o React
/* app.use(express.static(path.join(__dirname, 'client/build'))); */
app.use(express.static('client/build'));

app.get('/api/', (_, response) => {
  response.send({
    message:
      'API em execução. Uitlize através do front: https://mktp-tools.herokuapp.com/',
  })
})

app.post('/postnotificationzoom/:zoom_marketplace/:idZoomNotify/:notifyStatus/:orderNumber', (req,res)=>{
    const { zoom_marketplace, idZoomNotify, notifyStatus, orderNumber } = req.params
    console.log(req.params)

    const bodyNotificationZoom = {
        "orderNumber": orderNumber,
        "status": notifyStatus,
        "controller": "zoom_marketplace_notifications",
        "action": "notify", 
        "zoom_marketplace_id": idZoomNotify,
        "zoom_marketplace_notification": {
            "orderNumber": orderNumber,
            "status": notifyStatus
        }
      }

      console.log(bodyNotificationZoom)
    
    const api = axios.create({ baseURL: 'https://in.skyhub.com.br' })
    console.log(api)

    const response = api.post(`/${zoom_marketplace}/${idZoomNotify}/notification`, bodyNotificationZoom);
    console.log(response)

    return res.json({"Response": response.status})
})
 
const APP_PORT = process.env.PORT || 3001;
app.listen(APP_PORT, () => {
  console.log(`Servidor iniciado na porta ${APP_PORT}`);
});