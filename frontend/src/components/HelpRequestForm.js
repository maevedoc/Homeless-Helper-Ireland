import React, { useState } from 'react';

export default function HelpRequestForm() {
  const [formData, setFormData] = useState({ name: '', location: '', helpType: '', contact: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:4000/help-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const json = await res.json();
      setStatus(json.status);
      setFormData({ name: '', location: '', helpType: '', contact: '' });
    } catch (err) {
      setStatus('Error submitting request');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '40px' }}>
      <h2>Request Help</h2>
      <input
        placeholder="Name (optional)"
        value={formData.name}
        onChange={e => setFormData({ ...formData, name: e.target.value })}
        style={{ display: 'block', marginBottom: '10px', width: '300px' }}
      />
      <input
        placeholder="Location"
        required
        value={formData.location}
        onChange={e => setFormData({ ...formData, location: e.target.value })}
        style={{ display: 'block', marginBottom: '10px', width: '300px' }}
      />
      <input
        placeholder="Type of help"
        required
        value={formData.helpType}
        onChange={e => setFormData({ ...formData, helpType: e.target.value })}
        style={{ display: 'block', marginBottom: '10px', width: '300px' }}
      />
      <input
        placeholder="Contact info"
        required
        value={formData.contact}
        onChange={e => setFormData({ ...formData, contact: e.target.value })}
        style={{ display: 'block', marginBottom: '10px', width: '300px' }}
      />
      <button type="submit">Submit</button>
      {status && <p>{status}</p>}
    </form>
  );
}
