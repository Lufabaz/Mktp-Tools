import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3001' });

async function postZoomNotification(idZoomNotify,body) {
  const response = await api.post(`/postnotificationzoom/:zoom_marketplace/:idZoomNotify/:notifyStatus/:orderNumber`, body);
  return response;
}

export {  postZoomNotification  };