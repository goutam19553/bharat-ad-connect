import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function AnimatedBackground() {
  // Initialize tsparticles engine with all features
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: "#0a0e23", // Dark blue background
          },
          fpsLimit: 60, // Max FPS
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab", // Grab effect on hover
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.9,
                  color: "#ff4081", // Pinkish link color on hover
                },
              },
            },
          },
          particles: {
            color: {
              value: ["#00bcd4", "#ff4081", "#00ff94"], // Multiple colors for animation
              animation: {
                enable: true,
                speed: 20, // Speed of color animation
                sync: false,
              },
            },
            links: {
              color: "#00bcd4", // Default link color
              distance: 130,
              enable: true,
              opacity: 0.5,
              width: 1.5,
              triangles: {
                enable: false, // No triangle shapes between particles
              },
            },
            collisions: {
              enable: false, // Particles don't bounce on collision
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60, // Number of particles
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
              animation: {
                enable: true,
                speed: 3, // Speed of size pulsing animation
                minimumValue: 1,
                sync: false,
              },
            },
          },
          detectRetina: true, // Adjust for retina displays
        }}
      />
    </div>
  );
}
