import SectionContainer from "./containers/SecctionContainer";
import { MentorList } from "./ui/mentor/mentorList";

export function Mentors() {
  return (
    <SectionContainer>
      <h2 className="text-3xl mt-10 text-right font-extrabold text-black">
        Mentores
      </h2>
      <div className="flex flex-col items-center justify-center">
        <MentorList />
      </div>
    </SectionContainer>
  );
}
