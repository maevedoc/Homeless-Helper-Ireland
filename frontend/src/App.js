import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import MapView from './components/MapView';
import ServiceList from './components/ServiceList';
import HelpRequestForm from './components/HelpRequestForm';
import Info from './pages/Info'; // <-- make sure this file exists

function HomePage({ services }) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Homeless Helper Ireland</h1>
      <MapView services={services} />
      <ServiceList services={services} />
      <HelpRequestForm />
    </div>
  );
}

function App() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/services')
      .then(res => res.json())
      .then(setServices)
      .catch(console.error);
  }, []);

  return (
    <Router>
      <nav style={{ padding: '10px', background: '#eee', marginBottom: '1em' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/info">Info for Homeless People</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage services={services} />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  );
}

export default App;
