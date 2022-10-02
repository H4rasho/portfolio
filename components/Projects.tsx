import Card from "./ui/cards/Card";

const PROJECTS = [
  {
    name: "Memorice Spacial",
    img: "/img/memorice-spacial.png",
    description:
      "Juego de memoria basado en el juego Nashor Spacial, con el aprendi lo basico de React",
  },
];

export default function Projects() {
  return (
    <div>
      <h2 className="text-right text-3xl font-extrabold mt-10 ">Proyectos</h2>
      <div className="flex gap-2 mt-5 flex-wrap">
        {PROJECTS.map((project) => (
          <Card {...project} key={project.name} />
        ))}
      </div>
    </div>
  );
}
