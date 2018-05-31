export const fetchData = () => {
  const url = `http://localhost:3001/api/v1/houses`;
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error))
}

export const fetchSwornMembers = (house) => {
  console.log(house)
}



