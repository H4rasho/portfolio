import SectionContainer from "./containers/SecctionContainer";
import { MentorList } from "./ui/mentor/mentorList";

export function Mentors() {
  return (
    <SectionContainer>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-extrabold text-black">Mentores</h2>
        <MentorList />
      </div>
    </SectionContainer>
  );
}
