import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import { Footer } from "../components/Footer";
import IconList from "../components/IconList";
import Projects from "../components/Projects";
import NavBar from "../components/ui/NavBar";
import TimeLine from "../components/ui/TimeLine/TimeLine";
import Welcome from "../components/Welcome";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Thomas Sepúlveda</title>
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
          <Projects />
          <TimeLine />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Home;
