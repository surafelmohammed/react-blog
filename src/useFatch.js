import { useEffect,useState } from "react";

const useFatch = (url) => {
    const [data, setData] = useState(null);
    const [isPending,setIsPending]=useState(true);
    const [error,setError] = useState(null)
    

    useEffect(()=>{
        fetch(url)
            .then(res=>{
            if(!res.ok){
                throw Error('faildd to fatch the data')
            }
            return res.json();
            })
            .then((data)=>{
            setData(data);
            setIsPending(false);
            setError(null);
            })
            .catch((err)=>{
            setIsPending(false);
            setError(err.message)    
            })
      },[url]);
      return {data,isPending,error}
}
export default useFatch;
 
