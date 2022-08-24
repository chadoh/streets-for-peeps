import Head from "next/head";

const siteTitle = "Streets for Peeps";
const siteDescription = "Streets for the people! Slowing traffic, making Lancaster more walkable/bikeable/whateverable, as long as your whatever ain’t a car.";
const baseUrl = "https://chadoh.com/streets-for-peeps"

type Props = React.PropsWithChildren<{
  title?: string
  description?: string
  author?: string
}>

export default function Layout({
  title = siteTitle,
  description = siteDescription,
  author = "",
  children
}: Props) {
  const combinedTitle = `${title}${
    title === siteTitle ? "" : ` • ${siteTitle}`
  }`;
  return (
    <>
      <Head>
        <title>{combinedTitle}</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content={description} />
        <meta name="og:title" content={combinedTitle} />
        <meta name="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://raen.dev/admin/" />
        <meta property="og:image" content={`${baseUrl}/cityscape.png`} />
        <meta property="og:image:alt" content="A drawing of Lancaster PA's downtown" />
        <meta name="twitter:image" content={`${baseUrl}/cityscape.png`} />
        <meta name="twitter:image:alt" content="A drawing of Lancaster PA's downtown" />
        <meta name="twitter:card" content="summary_large_image" />
        {author && <meta name="twitter:creator" content={author} />}
        <meta name="twitter:title" content={combinedTitle} />
      </Head>
      {children}
    </>
  );
}
