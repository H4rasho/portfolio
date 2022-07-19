export default function Welcome() {
  return (
    <>
      <h1 className="text text-4xl text-text font-bold mt-5">
        Thomas Sepúlveda
      </h1>
      <img
        src="/img/thomas.jpg"
        width={180}
        height={180}
        alt="thomas"
        className="rounded-full mt-4"
      />
      <p className="text text-xl text-text font-light text-center px-10 py-5">
        Soy desarrollador web fullstack, y este es mi portfolio donde puedes ver
        algunos de mis proyectos.
      </p>
    </>
  );
}
