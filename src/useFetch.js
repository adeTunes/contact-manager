import { useEffect, useState } from "react"

const useFetch = (url) => {
const [data, setData] = useState(null)
const [error, setError] = useState(null)
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
      fetch(url)
      .then(res => {
        if(!res.ok) {
          throw Error('Could not fetch the required resource...');
        }
        return res.json();
      })
      .then(data => {
        setError(null);
        setIsLoading(false);
        setData(data);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      })
  }, [url])

  return { data, isLoading, error }

}

export default useFetch;