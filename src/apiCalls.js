export const fetchData = (populateData) => {
  const url= `http://localhost:3001/api/v1/houses`;
  const method = {
    method: 'GET'
  }
  fetch(url, method)
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(data => {
      populateData(data);
    })
    .catch(error => console.log(error))
}

export const fetchHouses = async () => {
  const url = `http://localhost:3001/api/v1/houses`;
  const method = {
    method: 'GET'
  } 
  const response = await fetch(url, method);
  const houses = await response.json();
  return houses;
}

