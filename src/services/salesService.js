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

export const getCommunityTotal = (id) => {
  return fetch(`${BASE_URL}/community/${id}`)
  .then(res => res.json())
  .catch(err => console.log(err))
}

export const getDepartmentTotal = (id) => {
  return fetch(`${BASE_URL}/department/${id}`)
  .then(res => res.json())
  .catch(err => console.log(err))
}

export const getCountryTotal = (id) => {
  return fetch(`${BASE_URL}/country/${id}`)
  .then(res => res.json())
  .catch(err => console.log(err))
}