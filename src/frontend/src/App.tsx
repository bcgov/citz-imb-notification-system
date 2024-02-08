/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from 'react';
import { healthCheck } from '@/api';
import { Button } from '@/components/ui/button';

function App() {
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    await healthCheck(setData, setError, setIsLoading);
  };

  return (
    <div className="card">
      <Button className="margin-4" onClick={fetchData} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Fetch Data'}
      </Button>
      {data && <div>Data: {data}</div>}
      {error && <div>Error: {error}</div>}
    </div>
  );
}

export default App;
