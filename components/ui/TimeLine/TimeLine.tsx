import SectionContainer from "../../containers/SecctionContainer";
import University from "../../icons/University";
import TimeLineItem from "./TimeLineItem";

export default function TimeLine() {
  return (
    <SectionContainer>
      <h2 className="text-right text-3xl font-extrabold mt-10 text-black">
        Trajectoria
      </h2>
      <ol className="relative border-l border-black mt-8">
        <TimeLineItem
          title="Titulado de Ingenieria en Informática"
          date="2016 - 2021"
          description="Univeridad Tecnológica Metropolitana, Santiago de Chile"
          icon={<University />}
        />
        <TimeLineItem
          title="Desarrollador FullStack en Belray Chile"
          date="2022 - Actualidad"
          description="Desarrollé aplicaciones centrada en la mejora de continua de la empresa, desde una API con GraphQl e implementación de una base de datos Postgres, aplicaciones de cliente en React 
          y una aplicación con modo ofline en React Native."
          icon={<University />}
        />
      </ol>
    </SectionContainer>
  );
}
