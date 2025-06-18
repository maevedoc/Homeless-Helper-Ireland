import React from 'react';

const googleMapsApiKey = 'AIzaSyBoDDFPs3U9dj2sy78fw-ixBOOudsulxIw';

export default function MapView({ services }) {
  React.useEffect(() => {
    console.log('MapView – services:', services);
    if (!services.length) return;

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}`;
    script.async = true;
    script.onerror = () => console.error('Google Maps script failed to load');
    script.onload = () => {
      const map = new window.google.maps.Map(
        document.getElementById('map'),
        {
          center: { lat: 53.349805, lng: -6.26031 },
          zoom: 8,
        }
      );

      services.forEach(({ lat, lng, name }) => {
        new window.google.maps.Marker({
          position: { lat, lng },
          map,
          title: name,
        });
      });
    };
    document.head.appendChild(script);
  }, [services]);

  return (
    <div
      id="map"
      style={{ width: '100%', height: '400px', marginBottom: '20px' }}
    ></div>
  );
}
