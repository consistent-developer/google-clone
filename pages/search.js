import Head from "next/head"
import { useRouter } from "next/router";
import Header from "../Components/Header"
import SearchResults from "../Components/SearchResults";
import { API_KEY, CONTEXT_KEY } from "../keys"
import Response from "../Response";

function Search ({ results }) {
  const router = useRouter();
  console.log({ results });
  return (
    <div>
      <Head>
        <title>search : {router.query.term} </title>
        <link rel='icon' href='./favicon.ico' />
      </Head>

      {/* Header */}
      <Header />

      {/* Search */}
      <SearchResults results={results} />
    </div>
  )
}
export default Search;

export async function getServerSideProps (context) {
  const useDummydata = true;
  const startIndex = context.query.start || '0';

  const data = useDummydata ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then((response) => response.json());

  // TODO:After SERVER has rendered... Pass the results to the client
  return {
    props: {
      results: data,
    },
  }
}
