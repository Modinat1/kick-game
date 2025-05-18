import underRing from "/elipseRingUnder.png";
const Rating = () => {
  return (
    <div className="relative w-[100px] h-[100px]">
      <img
        src={underRing}
        alt="Background 3"
        className="absolute h-auto w-auto scale-130 top-[-14px] left-[-5px] md:top-[-10px] md:left-[-10px] lg:top-[-10px] lg:left-[-5px] 2xl:top-[-2px] 2xl:left-[8px]"
      />

      {/* Main ring with centered text */}
      <div className="absolute top-0 left-5 w-full h-full">
        <img
          src="/elipseRingBlue.png"
          alt="main ring"
          className="object-contain"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-4xl font-bold drop-shadow-md">
            9,2
          </span>
        </div>
      </div>

      {/* Stars */}
      <div className="absolute top-0 -right-5">
        <img src="/stars.png" alt="stars" className="w-[40px] h-[40px]" />
      </div>
    </div>
  );
};

export default Rating;
