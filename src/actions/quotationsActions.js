import axios from 'axios'

export function getQuotations(pageNumber=1) {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  return (dispatch) => {

    axios.get(`http://199.247.18.85/api/v1/quotations?page=${pageNumber}`)
      .then(response => {
        dispatch({
          type: 'LOAD_QUOTATIONS_SUCCESS',
          payload: response.data
        })
      })
  }
}

