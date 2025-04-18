import axios from "axios";
import { useEffect, useState } from "react";

export default function useData(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [response, setResponse] = useState(null);

  async function getData(url) {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      setResponse(data);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData(url);
  }, [url]);

  return {
    loading,
    error,
    response,
  };
}
