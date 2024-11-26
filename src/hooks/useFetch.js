import { useEffect, useState } from "react";
import axios from "../api";

export const useFetch = (path, params={}, deps=[]) => {
    const [data, setData] = useState(null)
    const [loading,setLoading] = useState(null)
    useEffect(()=>{
        setLoading(true)
        axios
            .get(path, {
                params
            })
            .then(res => setData(res.data))
            .catch(err => console.log(err))
            .finally(setLoading(false))
    }, [...deps])

    return {data,loading}
}