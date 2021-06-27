import axios from "axios";
import Head from "next/head";
import FrontPageMainBanner from "../app/components/frontPageMainBanner/FrontPageMainBanner";
import Promoted from "../app/components/promoted/Promoted";
import CarWashType from "../app/types/CarWash";

interface HomeProps {
  promotedCarWashes: CarWashType[];
  isPromotedCarWashesError: boolean;
}

export default function Home(props: HomeProps) {
  const { promotedCarWashes, isPromotedCarWashesError } = props;

  return (
    <>
      <Head>
        <title>
          Ranking myjni bezdotykowych i usług Auto detailingu | rankingmyjni.pl
        </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_CLIENT_HOST}`} />
      </Head>
      <main>
        <FrontPageMainBanner />
        <Promoted promotedCarWashes={promotedCarWashes} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  interface Props {
    promotedCarWashes: CarWashType[];
    isPromotedCarWashesError: boolean;
  }

  const props: Props = {
    promotedCarWashes: [],
    isPromotedCarWashesError: false,
  };

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST}/car-washes?promoted_frontpage=true`
    );
    props.promotedCarWashes = response.data;
  } catch (err) {
    props.isPromotedCarWashesError = true;
    console.log(err);
  }

  return {
    props: {
      promotedCarWashes: props.promotedCarWashes,
      isPromotedCarWashesError: props.isPromotedCarWashesError,
    },
    revalidate: 18000,
  };
}
