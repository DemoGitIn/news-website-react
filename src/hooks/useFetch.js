import { useState, useEffect } from 'react';


const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        setTimeout(()=> {
          setLoading(false);
        },3000);
        setError(null);
        setData(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [url]);  

  return {
    loading,
    error,
    data,
  };
};

export default useFetch;