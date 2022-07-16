import type { NextPage } from "next";
import IconList from "../components/IconList";
import Welcome from "../components/Welcome";

const Home: NextPage = () => {
  return (
    <div
      className="bg-background min-h-screen 
      font-sans flex flex-col aling-center items-center"
    >
      <Welcome />
      <IconList />
    </div>
  );
};

export default Home;
