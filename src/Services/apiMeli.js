const uriMeli = 'https://api.mercadolibre.com'

const getEanValidator = async (ean) => {
  try {
    const data = await fetch(`${uriMeli}/product-identifier/validator?product_identifier=${ean}`)
    const json = await data.json()
    return json

  } catch (err) {
    console.log(err)    
    return err
  }
}

const getItems = async (item,token) => {
  let fullToken = ''

  if (!token) {
    fullToken = ''
  } else {
    fullToken = `?access_token=${token}`
  }

  try {
    const data = await fetch(`${uriMeli}/items/${item}/${fullToken}`)
    const json = await data.json()
    return json

  } catch (err) {
    console.log(err)    
    return err
  }
}

export default { getEanValidator, getItems }