export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text text-3xl text-black font-extrabold">{children}</h2>
  );
}
