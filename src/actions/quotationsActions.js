import axios from 'axios'

export function getQuotations() {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  return (dispatch) => {

    axios.get(proxyurl + 'https://prod-quotations.herokuapp.com/api/v1/quotations')
      .then(response => {
        console.log(response.data, 'DATA');
        dispatch({
          type: 'LOAD_QUOTATIONS_SUCCESS',
          payload: response.data.quotations
        })
      })
  }
}

