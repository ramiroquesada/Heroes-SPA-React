import { useState, useEffect } from 'react';
import {getHeroesFetch} from '../../hooks';
import { DataContext } from './DataContext';

export function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getHeroesFetch();
      setData(response);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}, application may not work on iOs devices</div>;
  }

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}