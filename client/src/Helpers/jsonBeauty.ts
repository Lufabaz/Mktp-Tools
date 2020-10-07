const replacer = (_key: any, value: null) => (value === null ? undefined : value)

const stringify = (obj: any) => {
  JSON.stringify(obj, replacer)
}

const syntaxHighlight = (json: string) => {
  json = json
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
    match => {
      let cls = 'color: darkorange;'
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'color: red;'
        } else {
          cls = 'color: green;'
        }
      } else if (/true|false/.test(match)) {
        cls = 'color: blue;'
      } else if (/null/.test(match)) {
        cls = 'color: magenta;'
      }
      return `<span style="${cls}">${match}</span>`
    }
  )
}

const prettyJson = (payload: string | Record<string, any>): string => {
  let json: Record<string, any>
  try {
    json = JSON.parse(payload as string)
  } catch (e) {
    json = payload as Record<string, any>
  }

  if (typeof json === 'object') {
    Object.entries(json).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value = value.map(element => {
          prettyJson(element)
        })
      } else if (typeof value === 'string' && value.match(/"+:+"/)) {
        json[key] = JSON.parse(value)
      }
    })
  }

  return JSON.stringify(json, null, 2)
}

export { stringify, syntaxHighlight, prettyJson }