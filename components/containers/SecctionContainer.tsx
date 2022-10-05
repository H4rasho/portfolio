import { ContainerProps } from "./types";

export default function SectionContainer({
  children,
  className: customClassName,
  ...rest
}: ContainerProps) {
  return (
    <div
      className="mt-10 p-6 bg-primary rounded-lg text-black w-full max-w-2xl"
      {...rest}
    >
      {children}
    </div>
  );
}
