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
<a
    href={
      'https://www.google.com/maps/place/Danaus+School/@20.6160043,-100.3804581,17z/data=!3m1!4b1!4m6!3m5!1s0x85d35c745b968ca5:0x6997a2ca4ca0e68e!8m2!3d20.6160043!4d-100.3804581!16s%2Fg%2F11g9ntycg8?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D' +
      encodeURIComponent('')
    }
    target="_blank"
    rel="noopener noreferrer"
  >
<p className="l01">DANAUS SCHOOL</p>      
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
