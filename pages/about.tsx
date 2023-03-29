import Awards from "@/components/About/Awards";
import Header from "@/components/About/Header";
import Wholesale from "@/components/About/Wholesale";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>slowroast - Cofee</title>
        <meta
          name="description"
          content="slowroast : coffee slowroasted to perfection. Unique small-lot coffees from our globe-spanning network of artisan
            producers, roasted to perfection and delivered to you each month."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col gap-32 mt-20">
        <Header />
        <Awards />
        <Wholesale />
      </main>
    </>
  );
};

export default About;
