import { useEffect, useState } from 'react';
import axios from 'axios';

const useApi = (initialUrl) => {
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [url]);

  const updateUrl = (newUrl) => {
    setUrl(newUrl);
  };

  return { data, loading, error, updateUrl };
};

export default useApi;
