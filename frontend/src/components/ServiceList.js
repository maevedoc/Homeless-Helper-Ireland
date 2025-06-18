import React, { useState, useMemo } from 'react';

export default function ServiceList({ services }) {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const serviceTypes = useMemo(() => {
    const types = services.map(s => s.type);
    return ['All', ...Array.from(new Set(types))];
  }, [services]);

  if (!services.length) return <p>Loading services...</p>;

  const filteredServices = filter === 'All' 
    ? services 
    : services.filter(s => s.type === filter);

  const searchedServices = filteredServices.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getDirectionsUrl = (service) => 
    `https://www.google.com/maps/dir/?api=1&destination=${service.lat},${service.lng}`;

  return (
    <>
      <div style={{ marginBottom: '1em' }}>
        <label>
          Filter by type:{' '}
          <select value={filter} onChange={e => setFilter(e.target.value)}>
            {serviceTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </label>

        <label style={{ marginLeft: '1em' }}>
          Search:{' '}
          <input 
            type="text" 
            placeholder="Name or address..." 
            value={searchTerm} 
            onChange={e => setSearchTerm(e.target.value)} 
          />
        </label>
      </div>

      <div style={{ marginBottom: '1em' }}>
        <a href="/info" style={{ fontWeight: 'bold', color: '#007bff' }}>
          🛈 Information & Support for Homeless People
        </a>
      </div>

      <ul>
        {searchedServices.length === 0 && <li>No services found.</li>}
        {searchedServices.map(({ id, name, address, phone, website, type, lat, lng }) => (
          <li key={id} style={{ marginBottom: '15px' }}>
            <strong>{name}</strong> ({type})<br />
            {address}<br />
            Phone: <a href={`tel:${phone}`}>{phone}</a><br />
            Website: <a href={website} target="_blank" rel="noreferrer">{website}</a><br />
            <a href={getDirectionsUrl({ lat, lng })} target="_blank" rel="noreferrer">
              Get Directions
            </a><br />
            <a href="/info" style={{ color: '#007bff' }}>
              More Support Info
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
