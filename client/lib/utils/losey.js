


const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body:null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect:'follow',
  referrerPolicy:'no-referrer',
  headers:{
    'Content-Type':'application/json; charset=UTF-8'
  }
}



export const losey = async (options = {}) =>{

  const {url, ...restOptions} = {
    ...defaultOptions,
    ...options,
    headers: {...defaultOptions.headers, ...options.headers}
  }


  let response = await fetch(url,restOptions)

  if(response.ok){
    response.data = await response.json()
  }

  // console.log(response);

  return response;
}



losey.get = async (url,options) => {
  return losey({
    url,
    ...options
  })
}

losey.post = (url,body,options) =>{
  return losey({
    method:'POST',
    url,
    body:JSON.stringify(body),
    ...options
  })
}

losey.put = (url,body,options) =>{
  return losey({
    method:'PUT',
    url,
    body:JSON.stringify(body),
    ...options
  })
}

losey.delete = (url,options) =>{
  return losey({
    method:'DELETE',
    url,
    ...options
  })
}



































