export const fetchData = () => {
  const url = `http://localhost:3001/api/v1/houses`;
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error))
}

export const fetchSwornMembers = (urls) => {
  const ids = urls.map(url => {
    return url.split('/').pop()
  })
  const members = ids.map(id => {
    let url = `http://localhost:3001/api/v1/character/${id}`
    return fetch(url)
      .then(response => response.json())
      .catch(error => console.log(error))
  })
  return Promise.all(members)
}



