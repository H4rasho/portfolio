import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import IconList from "../components/IconList";
import NavBar from "../components/ui/NavBar";
import TimeLine from "../components/ui/TimeLine/TimeLine";
import Welcome from "../components/Welcome";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Thomas SepĂșlveda</title>
      </Head>
      <div
        className="bg-background 
        font-sans  text-text min-h-screen "
      >
        <NavBar />
        <main className="flex flex-col justify-center items-center -z-10 px-5">
          <Welcome />
          <IconList />
          <About />
          <TimeLine />
        </main>
      </div>
    </>
  );
};

export default Home;
