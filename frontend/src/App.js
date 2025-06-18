import React, { useEffect, useState } from 'react';
import MapView from './components/MapView';
import ServiceList from './components/ServiceList';
import HelpRequestForm from './components/HelpRequestForm';

function App() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/services')
      .then(res => res.json())
      .then(setServices)
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Homeless Helper Ireland</h1>
      <MapView services={services} />
      <ServiceList services={services} />
      <HelpRequestForm />
    </div>
  );
}

export default App;
