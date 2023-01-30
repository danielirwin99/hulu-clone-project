import Header from "components/Header";
import Nav from "components/Nav";
import Results from "components/Results";
import Head from "next/head";
import requests from "utils/requests";

export default function Home({ results }) {
  console.log(results);
  return (
    <>
      <Head>
        <title>Hulu 2.0</title>
      </Head>

      {/* HEADER */}
      <Header />

      {/* NAV */}
      
      <Nav />
      {/* RESULTS */}
      <Results results={results} />
    </>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchPopular.url
    }`
  ).then((response) => response.json());

  return {
    props: {
      results: request.results,
    },
  };
}
