export const fetchApi = (api, method, body) => {
  if(body) {
    return fetch(`${api}`, {
      method: `${method}`,
      body: `${body}`,
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(res => res.json()); 
  } else {
    return fetch(`${api}`, {
      method: `${method}`
    })
      .then(res => res.json());
  }

}
;
