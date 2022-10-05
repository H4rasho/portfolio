import { ContainerProps } from "./types";

export default function SvgContainer({ children, ...rest }: ContainerProps) {
  return (
    <div
      className="flex flex-col text-text bg-secondary p-3 rounded-full hover:scale-110 transform transition duration-300 ease-out cursor-pointer"
      {...rest}
    >
      {children}
    </div>
  );
}
