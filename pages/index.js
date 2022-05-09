import Head from 'next/head'
import Header from '../components/Header'
import List from '../components/List'
import Navbar from '../components/Navbar'
import sorov from '../baza/sorov'

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      sorov[genre]?.url || sorov.fetchTrending.url
    }`
  ).then((res) => res.json())

  return {
    props: {
      results: request.results,
    }
  }
}

export default function Home({ results }) {
  return (
    <>
      <Head>
        <title>Hulu Clone</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Header />
      <Navbar />
      <List results={results} />
    </>
  )
}
