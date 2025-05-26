import React from 'react';
import './App.css';
import Countdown from './Countdown';


function App() {
  return (
    <div className="contenedor">
      <div className="invitacion">
  <img
   src="./a1.png"
   alt="Animación celebración"
   className="namenicole"
 />

  <img
   src="/a2.png"
   alt="Animación celebración"
   className="li"
 />

<br />

<img src="/her1.png" alt="Foto de Daniela Nicol" className="foto-prima" />
<p className="l01">Te invio a celebrar mis 6 años</p>

<br />

<img
   src="/a2.png"
   alt="Animación celebración"
   className="li"
 />

 <br/>
        <Countdown targetDate="2025-06-05T00:00:00" />
 <br />

 <br />

 <img
   src="/a2.png"
   alt="Animación celebración"
   className="li"
 />

 <p><h1>FECHA Y HORA</h1></p> 
 <p className="l01">Jueves 5 de Junio | 4:00 PM</p>
 
 <a
  href={
    `https://calendar.google.com/calendar/render?action=TEMPLATE` +
    `&text=${encodeURIComponent('Cumpleaños de Daniela Nicole')}` +
    `&dates=${'20250605'}/${'20250605'}` +           // evento todo el día 5 de junio 
    `&details=${encodeURIComponent('¡No faltes a la celebración!')}` +
    `&location=${encodeURIComponent('Tlacuachines saloncito de fiestecitas. Qro')}`
  }
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="/z1.gif"
    alt="Agregar al calendario"
    className="calendar-btn"
  />
</a>
<br />
<br />

<img
   src="/a2.png"
   alt="Animación celebración"
   className="li"
 />
<p><h1>LUGAR</h1></p>
<a
    href={
      'https://www.google.com/maps/place/Tlacuachines+saloncito+de+fiestecitas/@20.528447,-100.4262202,17z/data=!3m1!4b1!4m6!3m5!1s0x85d345397f15651d:0x3e1097555ed26ca1!8m2!3d20.528447!4d-100.4262202!16s%2Fg%2F11krgt8f8n?hl=es-MX&entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoASAFQAw%3D%3D' +
      encodeURIComponent('Salón Jardín Alegría, Pachuca, Hidalgo')
    }
    target="_blank"
    rel="noopener noreferrer"
  >
<img
      src="/z2.gif"
      alt="Ver en Google Maps"
      className="map-btn"
/>
</a>
<p className="l01">Tlacuachines saloncito de fiestecitas. Qro.</p>
<br />
<img
   src="/a2.png"
   alt="Animación celebración"
   className="li"
 />

<p className="l01">¡No faltes! Será una celebración muy especial</p>
<img
   src="/a2.png"
   alt="Animación celebración"
   className="li"
/>

<a
          href="https://docs.google.com/forms/d/e/1FAIpQLScAAnKRULogq9YPwahd-CYVztRIfJ90ublzntzja0-5Zc6OGw/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/aa.gif"     /* Pon aquí la ruta de tu imagen */
            alt="Confirmar asistencia"
            className="confirm-btn"  /* Dale la clase que gustes */
          />
        </a>

<img
   src="/pagina.gif"
   alt="Animación celebración"
   className="gif-prima"
/>

<br />

</div>

</div>

);
}

export default App;
