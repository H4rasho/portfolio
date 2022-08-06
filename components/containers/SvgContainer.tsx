import { ContainerProps } from "./types";

export default function SvgContainer({ children, ...rest }: ContainerProps) {
  return (
    <div
      className="flex flex-col text-text bg-secondary p-3 rounded-full"
      {...rest}
    >
      {children}
    </div>
  );
}
