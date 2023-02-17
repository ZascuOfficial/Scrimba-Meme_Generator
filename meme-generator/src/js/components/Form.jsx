import React from 'react';

export default function Form() {
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Top text"
        name="top-text"
        id="top-text"
        className="form-text-input"
      />

      <input
        type="text"
        placeholder="Bottom text"
        name="bottom-text"
        id="bottom-text"
        className="form-text-input"
      />

      <button className="new-image-button">
        Get new image
      </button>
    </div>
  );
}