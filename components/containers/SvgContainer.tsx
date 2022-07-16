interface SvgContainerProps extends React.AllHTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export default function SvgContainer({ children, ...rest }: SvgContainerProps) {
  return (
    <div
      className="flex flex-col text-text bg-primary p-3 rounded-full"
      {...rest}
    >
      {children}
    </div>
  );
}
