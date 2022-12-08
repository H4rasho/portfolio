import Image from "next/image";
import IconList from "./IconList";

export default function Welcome() {
  return (
    <section id="welcome" className="flex flex-col justify-center items-center">
      <h1 className="text text-3xl text-center text-text font-bold mt-5 mb-5">
        Thomas Sepúlveda
      </h1>
      <Image
        src="/img/thomas.jpg"
        width={180}
        height={180}
        alt="thomas"
        className="rounded-full mt-10"
      />
      <p className="text text-3xl text-text font-semibold text-center  py-5">
        Full Stack Developer
      </p>
      <IconList />
    </section>
  );
}
