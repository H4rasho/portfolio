import { TECNOLOGIES } from "./icons/Tecnologis";

const WrapIcon = ({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) => {
  return (
    <span
      title={title}
      className="hover:scale-125 transform transition duration-300 ease-out"
    >
      {icon}
    </span>
  );
};

export default function Tecnologies() {
  return (
    <section className="w-full rounded-xl p-5">
      <div className="flex mt-2 justify-center gap-2">
        {TECNOLOGIES.map((tec) => (
          <WrapIcon {...tec} key={tec.title} />
        ))}
      </div>
    </section>
  );
}
