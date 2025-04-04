import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-linear-to-b from-black to-red-800">
      <div className="relative">
        <div className="w-full flex flex-col gap-4 items-center justify-center text-center py-12">
        <Image src="/chefhat.svg" alt="pancake" width={80} height={80} />
          <h1 className="text-white text-4xl md:text-6xl font-bold px-4">
            Not Just Cooking. <br />
            Creating Culinary Experience.
          </h1>
          <Image src="/utensils.svg" alt="pancake" width={80} height={80} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
