// next image
import Image from "next/image";

const Circles = () => {
  return (
    <div
      className="w-[200px] xl:w-[300px] fixed -right-16 -bottom-2
    mix-bend-color-dodge animate-pulse duration-75 z-10 overflow-hidden"
    >
      <Image
        src={"/circles.png"}
        width={260}
        height={200}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Circles;
