import Head from "next/head";
import FrontPageMainBanner from "../app/components/frontPageMainBanner/FrontPageMainBanner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ranking Myjni</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <FrontPageMainBanner />
      </main>
    </>
  );
}
