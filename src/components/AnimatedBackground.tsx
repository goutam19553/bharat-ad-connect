import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function AnimatedBackground() {
  // Initialize tsparticles engine with loadFull
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="fixed inset-0 -z-10"> {/* Use fixed so it covers full viewport */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: "#0a0e23", // dark navy background
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.7,
                },
              },
            },
          },
          particles: {
            color: {
              value: "#00bcd4",
            },
            links: {
              color: "#00bcd4",
              distance: 130,
              enable: true,
              opacity: 0.5,
              width: 1.5,
            },
            collisions: {
              enable: false,
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
              value: 60,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
