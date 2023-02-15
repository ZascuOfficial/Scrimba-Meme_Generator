import React from 'react';

export default function Header() {
  return (
    <header>
      <img
        src="/src/assets/img/troll-face-icon.png"
        alt="An icon of a funny looking person doing a grin towards the camera"
        className="header-logo"
      />
      
      <h1>Meme Generator</h1>
    </header>
  );
}