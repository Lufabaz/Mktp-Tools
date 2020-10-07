import express from 'express'
import axios from 'axios'
import cors from 'cors'

const app = express()

app.listen(3001, () => {
  console.log(`Servidor iniciado na porta 3001`);
});

app.use(cors())

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



/* axios.post('https://in.skyhub.com.br',{    
        
            user: '1234',
            contact: [
              {
                number: '534543543',
                message: 'test message 1',
                externalid: '123456'
              }
            ],
            type: '2'      
    }).then(function(response){
        console.log(response.data)
        console.log(response.headers)
        console.log(response.status)
    }).catch(function(error){
        if(error){
            console.log(error)
        }
    }) */