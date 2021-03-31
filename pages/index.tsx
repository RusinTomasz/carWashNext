import Head from "next/head";
import FrontPageMainBanner from "../app/components/frontPageMainBanner/FrontPageMainBanner";
import Promoted from "../app/components/promoted/Promoted";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ranking Myjni</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <FrontPageMainBanner />
        <Promoted />
      </main>
    </>
  );
}
