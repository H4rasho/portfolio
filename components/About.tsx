import SectionContainer from "./containers/SecctionContainer";

export default function About() {
  return (
    <SectionContainer id="about">
      <h2 className="text text-3xl text-black font-extrabold mt-10 ">
        Acerca de Mi
      </h2>
      <div className="text text-black text-xl font-sans font-normal text-left italic mt-5 leading-6">
        <p>
          2 años de experiencia en desarrollo web. Interés por las buenas
          prácticas, la arquitetura de software y la evolución de las
          tecnologías.
        </p>
        <p className="mt-5">
          Me gusta discutir sobre el desarrollo, y mejorar la experiencia de
          desarrollo
        </p>
        <p className="mt-5">H4rasho es mi nombre social</p>
      </div>
    </SectionContainer>
  );
}
