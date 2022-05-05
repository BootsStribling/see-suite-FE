const BASE_URL = `${process.env.REACT_APP_API_URL}/api/transactions/total`

export const getTransactionTotal = () => {
  return fetch(BASE_URL)
  .then(res => res.json())
  .catch(err => console.log(err))
}