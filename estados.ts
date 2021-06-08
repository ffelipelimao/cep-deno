export async function estados(){
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    const options = {
        method: 'GET',
        headers: {
          'content-type': 'application/json;charset=utf-8'
        }
      }

  const response = await fetch(url, options)
  return response.json()
}