import React from 'react';

export default function Info() {
  return (
    <div style={{ padding: '1em', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Support Information for People Facing Homelessness</h1>
      
      <p>If you or someone you know is homeless or at risk of homelessness, the following resources may help:</p>

      <h2>Emergency Accommodation</h2>
      <ul>
        <li><strong>Focus Ireland</strong>: <a href="https://www.focusireland.ie" target="_blank" rel="noreferrer">focusireland.ie</a></li>
        <li><strong>Simon Communities</strong>: <a href="https://www.simon.ie" target="_blank" rel="noreferrer">simon.ie</a></li>
        <li><strong>Depaul Ireland</strong>: <a href="https://ie.depaulcharity.org/" target="_blank" rel="noreferrer">ie.depaulcharity.org</a></li>
      </ul>

      <h2>Food and Basic Needs</h2>
      <ul>
        <li><strong>The Mendicity Institution</strong>: Meals and support in Dublin</li>
        <li><strong>Crosscare</strong>: <a href="https://www.crosscare.ie" target="_blank" rel="noreferrer">crosscare.ie</a></li>
      </ul>

      <h2>Legal & Housing Advice</h2>
      <ul>
        <li><strong>Threshold</strong>: <a href="https://www.threshold.ie" target="_blank" rel="noreferrer">threshold.ie</a></li>
        <li><strong>FLAC</strong>: <a href="https://www.flac.ie" target="_blank" rel="noreferrer">flac.ie</a></li>
      </ul>

      <h2>Mental Health & Addiction</h2>
      <ul>
        <li><strong>Pieta House</strong>: <a href="https://www.pieta.ie" target="_blank" rel="noreferrer">pieta.ie</a></li>
        <li><strong>Merchants Quay Ireland</strong>: <a href="https://www.mqi.ie" target="_blank" rel="noreferrer">mqi.ie</a></li>
      </ul>

      <h2>Emergency Contacts</h2>
      <ul>
        <li><strong>Dublin Regional Homeless Executive</strong>: 1800 707 707</li>
        <li><strong>Emergency Services</strong>: Dial 999 or 112</li>
      </ul>

      <p style={{ marginTop: '2em' }}>
        You are not alone. Reach out. Help is available.
      </p>
    </div>
  );
}
