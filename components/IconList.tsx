import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";
import Twitter from "./icons/Twitter";

export default function IconList() {
  return (
    <div className="flex justify-center items-center gap-5">
      <Github fill="#e63946" />
      <Twitter fill="#e63946" />
      <Linkedin fill="#e63946" />
    </div>
  );
}
