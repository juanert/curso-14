import { useState, useEffect } from 'react';
import axios from 'axios';

function ApiKey() {
  const [data, setData] = useState(null);
  const options = {
    method: 'GET',
    url: 'https://love-calculator.p.rapidapi.com/getPercentage',
    params: {
      sname: 'Alice',
      fname: 'John'
    },
    headers: {
      'X-RapidAPI-Key': '0f72fb545amshd55cba78a64604cp1e632fjsn672837304d0b',
      'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
    }};

  useEffect(
    () => {
      axios.get(options.url, options)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    }, []
  );
  
  if(data) {
    console.log(data);
  }

  return(
    <>
    </>
  )
}

export default ApiKey;