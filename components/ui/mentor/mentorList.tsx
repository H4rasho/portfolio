import Image from "next/image";

interface Mentor {
  name: string;
  avatar: string;
  url: string;
}

const MENTORS: Mentor[] = [
  {
    name: "Midudev",
    avatar: "/img/midu.png",
    url: "https://midu.dev/",
  },
  {
    name: "Fernando Herrera",
    avatar: "/img/Fernando_Herrera.jpg",
    url: "https://fernando-herrera.com/",
  },
  {
    name: "Hola Mundo",
    avatar: "/img/hola_mundo.jpg",
    url: "https://www.youtube.com/c/HolaMundoDev",
  },
];

export const MentorList = () => {
  return (
    <div className="gap-5">
      {MENTORS.map(({ name, avatar, url }) => (
        <a
          key={name}
          target="_blank"
          rel="noopener noreferrer"
          href={url}
          className="flex flex-col items-center mt-5 cursor-pointer hover:scale-105 transform transition duration-300 ease-out"
        >
          <Image
            src={avatar}
            width={80}
            height={80}
            alt={name}
            className="rounded-full"
          />
          <p className="text-center mt-2 text-text"> {name} </p>
        </a>
      ))}
    </div>
  );
};
