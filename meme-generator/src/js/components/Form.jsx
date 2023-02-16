import React from 'react';

export default function Form() {
  return (
    <form>
      <input
        type="text"
        name="top-text"
        id="top-text"
        className="form-text-input"
      />

      <input
        type="text"
        name="bottom-text"
        id="bottom-text"
        className="form-text-input"
      />

      <button className="new-image-button">
        Get new image
      </button>
    </form>
  );
}