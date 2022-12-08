import Image from "next/image";

export interface CardProps {
  name: string;
  img: string;
  description: string;
  repository?: string;
  demo?: string;
}

export default function ProjectCard({
  name,
  img,
  description,
  repository,
  demo,
}: CardProps) {
  return (
    <section className="p-8 bg-secondary rounded-xl">
      <article className="flex flex-col justify-center max-w-xs">
        <Image
          className="rounded-xl bg-cover"
          src={`/img/projects/${img}`}
          alt={`Proyecto realizao por Thomas Sepulveda, sobre ${description}`}
          width={350}
          height={350}
          objectFit="unset"
        />
        <div>
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="py-2">{description}</p>
          <div className="flex gap-1 flex-col">
            <a
              href={demo}
              rel="noopener noreferrer"
              target="_blank"
              className="cursor-pointer"
            >
              <button className=" bg-background hover:bg-primary text-text rounded-lg p-2 w-full text-lg font-bold">
                Demo
              </button>
            </a>
            <a
              href={repository}
              rel="noopener noreferrer"
              target="_blank"
              className="flex justify-center gap-2 hover:bg-tertiary bg-black text-text rounded-lg p-2 w-full text-lg font-bold cursor-pointer"
            >
              <svg
                width={30}
                height={30}
                viewBox="0 0 16 16"
                style={{
                  msTransform: "rotate(360deg)",
                  WebkitTransform: "rotate(360deg)",
                  transform: "rotate(360deg)",
                }}
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
              <span>Repositorio</span>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
