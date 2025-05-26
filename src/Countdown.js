import React, { useState, useEffect } from 'react';
export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const update = () => {
      const now  = new Date();
      const then = new Date(targetDate);
      const diff = then - now;

      if (diff <= 0) {
        setTimeLeft(null);
      } else {
        setTimeLeft({
          days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft === null) {
    return <div className="countdown">¡Feliz cumpleaños! 🎉</div>;
  }

  return (
    <div className="countdown">
      <span>Faltan {timeLeft.days} Dias y {String(timeLeft.hours).padStart(2,'0')} Horas </span>
     {/* {String(timeLeft.minutes).padStart(2,'0')} Minutos</span>
     <span>{String(timeLeft.seconds).padStart(2,'0')}Segundos</span>*/}
    </div>
  );
}
