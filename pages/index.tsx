import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import { Footer } from "../components/Footer";
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

      <NavBar />
      <main className="flex flex-col justify-center items-center -z-10 container m-auto">
        <Welcome />
        <About />
        <Projects />
        <TimeLine />
        <Footer />
      </main>
    </>
  );
};

export default Home;
