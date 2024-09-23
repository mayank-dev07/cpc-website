// import { useEffect, useRef } from "react";

// const StarBackground = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     const particlesArray = [];
//     const numberOfParticles = 5000;
//     const maxRadius = 1.2;
//     console.log("Canvas initialized");
    
//     // Set canvas size
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     // console.log("Canvas initialized");
//     // Create particles randomly distributed in a sphere
//     const createParticles = () => {
//       for (let i = 0; i < numberOfParticles; i++) {
//         const x = (Math.random() - 0.5) * 2 * maxRadius * canvas.width;
//         const y = (Math.random() - 0.5) * 2 * maxRadius * canvas.height;
//         const size = Math.random() * 1.5;
//         particlesArray.push({ x, y, size });
//       }
//     };

//     // Animation function to rotate particles
//     const animateParticles = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       ctx.fillStyle = "#ffffff"; // Star color
//       ctx.beginPath();

//       for (let i = 0; i < particlesArray.length; i++) {
//         const particle = particlesArray[i];
        
//         // Rotate particles
//         const angle = 0.001;
//         const rotatedX = particle.x * Math.cos(angle) - particle.y * Math.sin(angle);
//         const rotatedY = particle.x * Math.sin(angle) + particle.y * Math.cos(angle);

//         // Update particle positions
//         particle.x = rotatedX;
//         particle.y = rotatedY;

//         ctx.moveTo(particle.x, particle.y);
//         ctx.arc(particle.x + canvas.width / 2, particle.y + canvas.height / 2, particle.size, 0, Math.PI * 2);
//       }

//       ctx.fill();
//       requestAnimationFrame(animateParticles);
//     };

//     // Initialize and animate particles
//     createParticles();
//     animateParticles();

//     // Handle window resize
//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);

//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed inset-0 w-full h-full opacity-50 pointer-events-none z-[-1]" // Adjusted canvas properties
//     />
//   );
// };

// const StarsCanvas = () => {
//   return (
//     <div className="w-full h-full fixed inset-0 z-[-1]">
//       <StarBackground />
//     </div>
//   );
// };

// export default StarsCanvas;
