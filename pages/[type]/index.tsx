import Head from "next/head";
import voivodeships from "../../app/components/voivodeships/data/voivodeshipsData";
import VoivodeshipsList from "../../app/components/voivodeships/voivodeshipsList/VoivodeshipsList";
import Container from "../../app/styles/shared/Container";
import FlexWrapper from "../../app/styles/shared/FlexWrapper";

interface TypeParams {
  type: string;
}

interface CarWashTypeProps {
  type: string;
  canonicalUrl: string;
}

export default function CarWashType(props: CarWashTypeProps) {
  const { type, canonicalUrl } = props;

  return (
    <>
      <Head>
        <title>{`${
          type === "myjniebezdotykowe" ? "Myjnie bezdotykowe" : "Auto detailing"
        } | rankingmyjni.pl`}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <main>
        <Container>
          <FlexWrapper justifyContent="center">
            {/* Needs to be done more dynamicaly #review */}
            <h1>{`${
              type === "myjniebezdotykowe"
                ? "Myjnie bezdotykowe"
                : "Auto detailing"
            } - Województwa`}</h1>
          </FlexWrapper>
          <VoivodeshipsList type={type} voivodeships={voivodeships} />
        </Container>
      </main>
    </>
  );
}

export const getServerSideProps = async ({ req, query }) => {
  const { type }: TypeParams = query;

  return {
    props: {
      type,
      canonicalUrl: `https://${req.headers.host}${req.url}`,
    },
  };
};
