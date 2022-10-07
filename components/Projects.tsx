import Card from "./ui/cards/Card";

const PROJECTS = [
  {
    name: "Memorice Spacial",
    img: "/img/memorice-spacial.png",
    description:
      "Juego de memoria basado en el juego Nashor Spacial, con el aprendi lo basico de React",
  },
  {
    name: "Memorice Spacial",
    img: "/img/memorice-spacial.png",
    description:
      "Juego de memoria basado en el juego Nashor Spacial, con el aprendi lo basico de React",
  },
  {
    name: "Memorice Spacial",
    img: "/img/memorice-spacial.png",
    description:
      "Juego de memoria basado en el juego Nashor Spacial, con el aprendi lo basico de React",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-primary mt-10 rounded-xl w-full p-10">
      <h2 className="text-center text-4xl font-extrabold text-text">
        PROYECTOS
      </h2>
      <div className="flex gap-2 mt-5 flex-wrap justify-center">
        {PROJECTS.map((project) => (
          <Card {...project} key={project.name} />
        ))}
      </div>
    </section>
  );
}
