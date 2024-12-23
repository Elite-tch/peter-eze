import React from 'react';

function Map() {
  return (
    <div className="google-map">
      <iframe
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=Nigeria&t=&z=6&ie=UTF8&iwloc=&output=embed"
      ></iframe>
    </div>
  );
}

export default Map;
