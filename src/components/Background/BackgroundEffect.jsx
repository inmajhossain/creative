// "use client";
// import React, { useEffect, useRef } from "react";

// const BackgroundEffect = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let animationFrameId;

//     const resizeCanvas = () => {
//       const { innerWidth, innerHeight } = window;
//       const dpr = window.devicePixelRatio || 1;

//       canvas.width = innerWidth * dpr;
//       canvas.height = innerHeight * dpr;

//       canvas.style.width = `${innerWidth}px`;
//       canvas.style.height = `${innerHeight}px`;

//       ctx.scale(dpr, dpr);
//     };

//     // Initial resize
//     resizeCanvas();

//     // Add resize listener
//     window.addEventListener("resize", resizeCanvas);

//     const particles = Array.from({ length: 50 }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       radius: Math.random() * 2 + 1,
//       color: `hsla(${Math.random() * 360}, 70%, 70%, 0.6)`,
//       vx: (Math.random() - 0.5) * 2,
//       vy: (Math.random() - 0.5) * 2,
//     }));

//     const drawParticle = particle => {
//       ctx.beginPath();
//       ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
//       ctx.fillStyle = particle.color;
//       ctx.fill();
//     };

//     const connectParticles = particles => {
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < 150) {
//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 - distance / 750})`;
//             ctx.lineWidth = 0.5;
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.stroke();
//           }
//         }
//       }
//     };

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       particles.forEach(particle => {
//         particle.x += particle.vx;
//         particle.y += particle.vy;

//         if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
//         if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

//         drawParticle(particle);
//       });

//       connectParticles(particles);
//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed inset-0 w-full h-full pointer-events-none"
//       style={{
//         zIndex: -9,
//         background: "",
//       }}
//     />
//   );
// };

// export default BackgroundEffect;

// "use client";
// import React, { useEffect, useRef } from "react";

// const BackgroundEffect = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let animationFrameId;

//     const resizeCanvas = () => {
//       const { innerWidth, innerHeight } = window;
//       const dpr = window.devicePixelRatio || 1;

//       canvas.width = innerWidth * dpr;
//       canvas.height = innerHeight * dpr;

//       canvas.style.width = `${innerWidth}px`;
//       canvas.style.height = `${innerHeight}px`;

//       ctx.scale(dpr, dpr);
//     };

//     // Initial resize
//     resizeCanvas();

//     // Add resize listener
//     window.addEventListener("resize", resizeCanvas);

//     const particles = Array.from({ length: 100 }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       radius: Math.random() * 3 + 1,
//       color: `hsla(${Math.random() * 360}, 70%, 70%, 0.6)`,
//       vx: (Math.random() - 0.5) * 2,
//       vy: (Math.random() - 0.5) * 2,
//     }));

//     const drawParticle = particle => {
//       ctx.beginPath();
//       ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
//       ctx.fillStyle = particle.color;
//       ctx.fill();
//     };

//     const connectParticles = particles => {
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < 150) {
//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 - distance / 750})`;
//             ctx.lineWidth = 0.5;
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.stroke();
//           }
//         }
//       }
//     };

//     const animate = () => {
//       // Create a gradient background
//       const gradient = ctx.createLinearGradient(
//         0,
//         0,
//         canvas.width,
//         canvas.height
//       );
//       gradient.addColorStop(0, "rgba(0, 0, 0, 0.8)");
//       gradient.addColorStop(1, "rgba(0, 0, 0, 0.2)");
//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       particles.forEach(particle => {
//         particle.x += particle.vx;
//         particle.y += particle.vy;

//         if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
//         if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

//         drawParticle(particle);
//       });

//       connectParticles(particles);
//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed inset-0 w-full h-full pointer-events-none"
//       style={{
//         zIndex: -99,
//       }}
//     />
//   );
// };

// export default BackgroundEffect;

// "use client";
// import React, { useEffect, useRef } from "react";

// const ColorfulRainEffect = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let animationFrameId;

//     const resizeCanvas = () => {
//       const { innerWidth, innerHeight } = window;
//       const dpr = window.devicePixelRatio || 1;

//       canvas.width = innerWidth * dpr;
//       canvas.height = innerHeight * dpr;

//       canvas.style.width = `${innerWidth}px`;
//       canvas.style.height = `${innerHeight}px`;

//       ctx.scale(dpr, dpr);
//     };

//     // Initial resize
//     resizeCanvas();

//     // Add resize listener
//     window.addEventListener("resize", resizeCanvas);

//     const raindrops = Array.from({ length: 100 }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       radius: Math.random() * 5 + 2,
//       color: `hsl(${Math.random() * 360}, 100%, 50%)`,
//       speed: Math.random() * 3 + 2,
//     }));

//     const drawRaindrop = raindrop => {
//       ctx.beginPath();
//       ctx.arc(raindrop.x, raindrop.y, raindrop.radius, 0, Math.PI * 2);
//       ctx.fillStyle = raindrop.color;
//       ctx.fill();
//     };

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       raindrops.forEach(raindrop => {
//         raindrop.y += raindrop.speed;

//         if (raindrop.y > canvas.height) {
//           raindrop.y = 0;
//           raindrop.x = Math.random() * canvas.width;
//           raindrop.color = `hsl(${Math.random() * 360}, 100%, 50%)`; // Change color when it resets
//         }

//         drawRaindrop(raindrop);
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed inset-0 w-full h-full pointer-events-none"
//       style={{
//         zIndex: -9,
//         background: "",
//         // Optional: Add a slight background color
//       }}
//     />
//   );
// };

// export default ColorfulRainEffect;

"use client";
import React, { useEffect, useRef } from "react";

const ColorfulLineRainEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      const { innerWidth, innerHeight } = window;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;

      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;

      ctx.scale(dpr, dpr);
    };

    // Initial resize
    resizeCanvas();

    // Add resize listener
    window.addEventListener("resize", resizeCanvas);

    const raindrops = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 5 + 2,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      speed: Math.random() * 3 + 2,
    }));

    const drawLineRaindrop = raindrop => {
      ctx.beginPath();
      ctx.moveTo(raindrop.x, raindrop.y);
      ctx.lineTo(raindrop.x, raindrop.y + raindrop.length);
      ctx.strokeStyle = raindrop.color;
      ctx.lineWidth = 2; // Adjust line width as needed
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      raindrops.forEach(raindrop => {
        raindrop.y += raindrop.speed;

        if (raindrop.y > canvas.height) {
          raindrop.y = 0;
          raindrop.x = Math.random() * canvas.width;
          raindrop.color = `hsl(${Math.random() * 360}, 100%, 50%)`; // Change color when it resets
        }

        drawLineRaindrop(raindrop);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 opacity-70 w-full h-full pointer-events-none"
      style={{
        zIndex: -9,
        background: "", // Optional: Add a slight background color
      }}
    />
  );
};

export default ColorfulLineRainEffect;
