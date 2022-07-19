import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";
import Twitter from "./icons/Twitter";

export default function IconList() {
  return (
    <div className="flex justify-center items-center gap-5">
      <Github fill="#fff" />
      <Twitter fill="#fff" />
      <Linkedin fill="#fff" />
    </div>
  );
}
