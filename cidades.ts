export async function cidades(ufs: string[] | string){
  let url,options  
  
  if (Array.isArray(ufs)){ 
        
        const pipeUfs = ufs.join('|')
        
        url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${pipeUfs}/distritos`
        options = {
        method: 'GET',
        headers: {
          'content-type': 'application/json;charset=utf-8'
        }
      }
    } else{
      
      url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufs}/distritos`
      options = {
          method: 'GET',
          headers: {
            'content-type': 'application/json;charset=utf-8'
          }
        }

    }
    
  const response = await fetch(url, options)
  return response.json()
}