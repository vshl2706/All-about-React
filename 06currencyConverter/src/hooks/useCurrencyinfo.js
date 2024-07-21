import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(() => {
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
    }, [currency])

    console.log(data);
    return data
    
}


export default useCurrencyInfo;
/* 
The .then method is called on the promise returned by fetch.
Another .then method is chained to handle the promise returned by response.json(). This callback function takes the parsed JSON data (data) as a parameter and does something with it.
*/