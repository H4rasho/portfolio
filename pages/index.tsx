import type { NextPage } from "next";
import Head from "next/head";
import IconList from "../components/IconList";
import NavBar from "../components/ui/NavBar";
import Welcome from "../components/Welcome";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Thomas Sepúlveda</title>
      </Head>
      <div
        className="bg-background 
        font-sans  text-text min-h-screen"
      >
        <NavBar />
        <main className="flex flex-col justify-center items-center -z-10">
          <Welcome />
          <IconList />
        </main>
      </div>
    </>
  );
};

export default Home;
