import { ContainerProps } from "./types";

export default function SectionContainer({
  children,
  ...rest
}: ContainerProps) {
  return (
    <div
      className="mt-10 p-6 bg-primary rounded-lg text-black max-w-2xl"
      {...rest}
    >
      {children}
    </div>
  );
}
