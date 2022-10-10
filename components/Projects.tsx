import Card from "./ui/cards/Card";

const PROJECTS = [
  {
    name: "Monogatari Quotes",
    img: "monogatari-quotes.png",
    description:
      "Un repositorio de frases de Monogatari Series, con la intencion de aprender a usar Next.js.",
    demo: "https://monogatari-quotes.vercel.app/",
    repository: "https://github.com/H4rasho/monogatari-quotes",
  },
  {
    name: "Memorice Spacial",
    img: "memorice-spacial.png",
    demo: "https://memorice-spacial.vercel.app/",
    repository: "https://github.com/H4rasho/memorice-spacial",
    description:
      "Juego de memoria basado en el juego Nashor Spacial, con el aprendi lo basico de React.",
  },
  {
    name: "Password Generator",
    img: "password-generator.png",
    demo: "https://hacktoberfest-2022-git-fork-h4rasho-main-midudev-pro.vercel.app/entry/h4rasho",
    repository:
      "https://github.com/H4rasho/password-generator/tree/main/src/components/h4rasho",
    description:
      "Generador de contraseñas, donde participé por primera vez cotribuyendo a un proyecto open source.",
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
