import Consult from "@/components/Contact/Consult";
import SendInfo from "@/components/Contact/SendInfo";
import Head from "next/head";

const Contact = () => {
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
      <div className="flex flex-col gap-10 pb-10">
        <SendInfo />
        <Consult />
      </div>
    </>
  );
};

export default Contact;
