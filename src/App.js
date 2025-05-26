import React from 'react';
import './App.css';
import Countdown from './Countdown';


function App() {
  return (
    <div className="contenedor">
      <div className="invitacion">
  <img
   src="./dani.png"
   alt="Animación celebración"
   className="namenicole"
 />

<p className="l01">Te invito a celebrar mis 6 años</p>

<br />

<img
   src="/aa.png"
   alt="Animación celebración"
   className="li"
 />

 <br />

 <br />


 <p><h1>FECHA Y HORA</h1></p> 
 <p className="l01">Jueves 29 de Mayo | 9:30 am</p>
 
 <a
  href={
    `https://calendar.google.com/calendar/render?action=TEMPLATE` +
    `&text=${encodeURIComponent('Cumpleaños de Daniela Nicole')}` +
    `&dates=${'20250529'}/${'20250529'}` +           // evento todo el día 5 de junio 
    `&details=${encodeURIComponent('¡No faltes a la celebración!')}` +
    `&location=${encodeURIComponent('')}`
  }
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="/cal.png"
    alt="Agregar al calendario"
    className="calendar-btn"
  />
</a>
<br />
<br />

<img
   src="/aa.png"
   alt="Animación celebración"
   className="li"
 />
<p><h1>LUGAR</h1></p>
    
<img
      src="/danas.png"
      alt="Ver en Google Maps"
      className="map-btn"
/>
</a>
<br />
<img
   src="/aa.png"
   alt="Animación celebración"
   className="li"
 />

<p className="l01">¡No faltes! Será una celebración muy especial</p>
<img
   src="/aa.png"
   alt="Animación celebración"
   className="li"
/>
<br />
</div>
</div>
);
}

export default App;
