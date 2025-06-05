
const PlexusBackground = () => {
   return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden fancy-bg">
      <div className="absolute inset-0 pointer-events-none fancy-overlay" />
      <div className="absolute inset-0 pointer-events-none bg-particles" />
    </div>
  );
};
export default PlexusBackground;
