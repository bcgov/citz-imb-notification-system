/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState, useEffect } from 'react';
import { healthCheck } from '@/api';
import { Button } from '@/components/ui/button';
import { Messages } from '@/components/forms/Messages';

function App() {
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | undefined>('');

  const fetchData = async () => {
    await healthCheck(setData, setError, setIsLoading);
  };

  useEffect(() => {
    Notification.requestPermission()
      .then(function (result) {
        if(result === 'granted') {
          if( message !== ''){
            new Notification('New Message!', {
              body: message
            });
          }
        }
      })
      .catch((err) => {
        console.log('Error: ', err);
      })

    console.log('HERE: ', message);
  }, [message]);

  return (
    <div className="card">
      <Button className="margin-4" onClick={fetchData} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Fetch Data'}
      </Button>
      <Messages
        setMessage={setMessage}
      />
      {data && <div>Data: {data}</div>}
      {error && <div>Error: {error}</div>}
    </div>
  );
}

export default App;
