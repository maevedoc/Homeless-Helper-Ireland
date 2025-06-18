import React from 'react';

export default function ServiceList({ services }) {
  if (!services.length) return <p>Loading services...</p>;

  return (
    <ul>
      {services.map(({ id, name, address, phone, website, type }) => (
        <li key={id} style={{ marginBottom: '15px' }}>
          <strong>{name}</strong> ({type})<br />
          {address}<br />
          Phone: <a href={`tel:${phone}`}>{phone}</a><br />
          Website: <a href={website} target="_blank" rel="noreferrer">{website}</a>
        </li>
      ))}
    </ul>
  );
}
