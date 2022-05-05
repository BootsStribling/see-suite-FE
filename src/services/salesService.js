const BASE_URL = `${process.env.REACT_APP_API_URL}/api/transactions/total`


export const getTransactionTotal = () => {
  return fetch(BASE_URL)
  .then(res => res.json())
  .catch(err => console.log(err))
}

export const getDistributorTotal = () => {
  return fetch(`${BASE_URL}/distributors`)
  .then(res => res.json())
  .catch(err => console.log(err))
}

export const getGroupTotal = (id, group) => {
  return fetch(`${BASE_URL}/${group}/${id}`)
  .then(res => res.json())
  .catch(err => console.log(err))
}
