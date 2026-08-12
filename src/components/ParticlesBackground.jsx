import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {

  const init = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      init={init}
      options={{
        background: {
          color: "#050816",
        },
        particles: {
          number: {
            value: 100,
          },
          links: {
            enable: true,
            color: "#00ffff",
          },
          move: {
            enable: true,
            speed: 1,
          }
        }
      }}
    />
  );
}