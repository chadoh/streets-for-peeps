import Layout from "../components/layout";
import EmailSignup from "../components/email-signup";
import Hero from "../components/hero";
import { getPosts } from "../lib/posts";

export default function Home() {
  return (
    <Layout>
      <Hero>
        <h1>Streets for Peeps</h1>
        <p>
          Streets for the people! Slowing traffic, making Lancaster more walkable/<wbr/>bikeable/<wbr/>whateverable, as long as whatever ain’t a car.
        </p>
        <EmailSignup />
      </Hero>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getPosts();
  return { props: { posts } };
}
