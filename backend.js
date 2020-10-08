import express from 'express'
import axios from 'axios'
import cors from 'cors'
import path from 'path'

import dotenv from 'dotenv'
dotenv.config();

const app = express()

/* app.listen(3001, () => {
  console.log(`Servidor iniciado na porta 3001`);
}); */

app.use(cors())

// Vinculando o React
app.use(express.static(path.join(__dirname, 'client/build')));

//  Rota raiz
app.get('/', (_, response) => {
  response.send({
    message:
      'API em execução. Utilize através do front.',
  });
});

app.post('/postnotificationzoom/:zoom_marketplace/:idZoomNotify/:notifyStatus/:orderNumber', (req,res)=>{
    const { zoom_marketplace, idZoomNotify, notifyStatus, orderNumber } = req.params

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
    const response = api.post(`/${zoom_marketplace}/${idZoomNotify}/notification`, bodyNotificationZoom);

    return res.json({"Response": response.status})
})

const APP_PORT = process.env.PORT || 3001;
app.listen(APP_PORT, () => {
  console.log(`Servidor iniciado na porta ${APP_PORT}`);
});