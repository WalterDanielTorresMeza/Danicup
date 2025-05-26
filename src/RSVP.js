// src/RSVP.js
import React, { useState } from 'react';

export default function RSVP() {
  const [name, setName] = useState('');
  const [going, setGoing] = useState('yes');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    // Por ahora, sólo guardamos en localStorage o simulamos envío:
    const respuestas = JSON.parse(localStorage.getItem('rsvps') || '[]');
    respuestas.push({ name, going, date: new Date().toISOString() });
    localStorage.setItem('rsvps', JSON.stringify(respuestas));
    setSubmitted(true);
  };

  if (submitted) {
    return <p>¡Gracias por confirmar, {name}! 🎉</p>;
  }

  return (
    <form className="rsvp-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tu nombre"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <select value={going} onChange={e => setGoing(e.target.value)}>
        <option value="yes">¡Voy!</option>
        <option value="no">No podré ir</option>
      </select>
      <button type="submit">Confirmar</button>
    </form>
  );
}
