import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> {
            console.log(res)
            console.log(res.body)
            return res.json()
        })
        .then((res)=>setData(res[currency]))
        
    },[currency])
    console.log("in useCurrency")
    console.log(data)
    return data
}

export default useCurrencyInfo