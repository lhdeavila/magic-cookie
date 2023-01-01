import { Dashboard, ParticlesBox, Navbar }  from "../components";
import Head from "next/head";

// Homepage Layout
export default function Homepage() {
  return (
    <>
      <Head>
        <title> Pentesting tools</title>
        <description> This site is an example of Nextjs proyect </description>
      </Head>
      <div id="particles">
        <ParticlesBox />
        <Navbar />
        <Dashboard />
        <footer>
          <p>eleAche.</p>
          <br />
          <p> This site is </p>
        </footer>
      </div>
    </>
  );
}
