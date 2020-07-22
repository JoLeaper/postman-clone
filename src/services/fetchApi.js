export const fetchApi = (api, method, body) => {
  let fetchedData;
  if(body) {
    return fetch(`${api}`, {
      method: `${method}`,
      body: `${body}`
  })
  .then(res => res.json()) 
  } else {
    return fetch(`${api}`, {
      method: `${method}`
  })
  .then(res => res.json())
  }

}