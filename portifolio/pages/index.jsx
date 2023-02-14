import Head from "next/head";
import About from "src/components/about/about";
import Header from "src/components/Header/Header";
import client from "src/components/sanity";
import Skills from "src/components/Skills/skills";

export default function Home({ header, about, skills }) {
  return (
    <>
      <Head>
        <title>Home - italo Menzes</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Italo-Menezes" key="title" />
        <meta
          name="description"
          content="Tenha acesso aos melhores  ofertas do mercado e conheça melhor meu trablho!"
        />
      </Head>

      <Header header={header} />
      <main>
        <About about={about} />
        <Skills skills={skills} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const header = await client.fetch(`*[_type == "header"][0]`);
  const about = await client.fetch(`*[_type == "about"][0]`);
  const skills = await client.fetch(`*[_type == "skills"][0]`);

  return {
    props: {
      header,
      about,
      skills,
    },
  };
}
