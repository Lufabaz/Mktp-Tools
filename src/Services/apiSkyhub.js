const uriSkyhub = 'https://api.skyhub.com.br'

const postTestOrders = async () => {

  let headers = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-accountmanager-key': 'SkyHub',
      'X-User-Email': 'treinamentobling@skyhub.com.br',
      'X-Api-Key': '6KHGUABnVSG152A6LBMx',
    },
    mode: 'cors',
    cache: 'default',
    body: {"order": {"channel": "Marketplace","items": [{"id": "10200487","qty": 1,"original_price": 8.45,"special_price": 8.45}],"customer": {"name": "Nome do comprador","email": "comprador@exemplo.com.br","date_of_birth": "1995-01-01","gender": "male","vat_number": "12312312309","phones": ["8899999999"]},"billing_address": {"street": "Rua de teste","number": 1234,"detail": "Ponto de referência teste","neighborhood": "Bairro teste","city": "Cidade de teste","region": "UF","country": "BR","postcode": "90000000"},"shipping_address": {"street": "Rua de teste","number": 1234,"detail": "Ponto de referência teste","neighborhood": "Bairro teste","city": "Cidade de teste","region": "UF","country": "BR","postcode": "90000000"},"shipping_method": "Transportadora","estimated_delivery": "2015-01-10","shipping_cost": 5.0,"interest": 0.0,"discount": 0.00}},
  }

  try {
    return await fetch(uriSkyhub, headers)

  } catch (err) {
    console.log(err)    
    return err
  }

}