import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setData({ data: null, loading: true, error: null });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setData({
          loading: false,
          error: null,
          data,
        });
      });
  }, [url]);

  return data;
};
