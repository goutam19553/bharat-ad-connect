import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const ParallaxSection = () => {
  return (
    <section className="w-full h-[80vh] overflow-hidden relative z-10">
      <Parallax pages={1}>
        {/* Background Layer */}
        <ParallaxLayer
          offset={0}
          speed={0.1}
          className="bg-gradient-to-br from-blue-900 to-purple-900"
        >
          <div className="h-full w-full flex items-center justify-center">
            <h2 className="text-7xl text-white font-extrabold drop-shadow-lg animate-pulse">
              Revolutionize Outdoor Advertising
            </h2>
          </div>
        </ParallaxLayer>

        {/* Midground Floating Text */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          className="flex justify-center items-center"
        >
          <p className="text-white text-xl max-w-xl text-center animate-fade-in-up">
            Our platform blends AI, AR, and real-world data to help governments and advertisers connect in futuristic, efficient ways.
          </p>
        </ParallaxLayer>

        {/* Foreground Glow Elements */}
        <ParallaxLayer
          offset={0}
          speed={1.2}
          className="pointer-events-none"
        >
          <div className="absolute top-10 left-10 w-24 h-24 bg-pink-500 blur-3xl opacity-50 rounded-full animate-ping" />
          <div className="absolute bottom-10 right-10 w-20 h-20 bg-yellow-400 blur-2xl opacity-40 rounded-full animate-pulse" />
        </ParallaxLayer>
      </Parallax>
    </section>
  );
};

export default ParallaxSection;
