import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";
import Twitter from "./icons/Twitter";

export default function IconList() {
  return (
    <div className="flex justify-center items-center gap-5">
      <a
        href="https://github.com/H4rasho/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Github fill="#e63946" />
      </a>
      <a
        href="https://www.linkedin.com/in/thomas-sep%C3%BAlveda-torres-b5b963217/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Linkedin fill="#e63946" />
      </a>
      <a
        href="https://twitter.com/H4rasho"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Twitter fill="#e63946" />
      </a>
    </div>
  );
}
