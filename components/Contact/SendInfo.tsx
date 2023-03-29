import Image from "next/image";
import { useState } from "react";

const SendInfo = () => {
  const [send, setSend] = useState(false);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-32 px-6 md:px-20">
      <div className="relative w-full">
        <Image
          src="/contact.avif"
          alt="contact"
          fill
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,"
          className="object-cover w-full rounded-xl border-2 border-darkgreen"
        />
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl md:text-5xl font-semibold">
            Finest Coffe for your Store
          </h1>
          <p className="font-poppins">
            You want to offer sowroast in your shop, bar or restaurant. Let's
            chat about your plans together! Just fill out the form below and
            we'll get back to you shortly.
          </p>
        </div>
        { !send ? (
        <form className="font-poppins flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-sm">Your Name</p>
            <input className="rounded-xl p-5" placeholder="Ex: Nick Andrews" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Business Name</p>
            <input className="rounded-xl p-5" placeholder="Ex: slowroast" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Email address</p>
            <input
              className="rounded-xl p-5"
              placeholder="Ex: Nick Andrews"
              type="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Your Message</p>
            <textarea
              rows={10}
              cols={5}
              className="rounded-xl p-5"
              placeholder="Tell us more about your business and what you're looking for."
            />
          </div>
          <button className="bg-red-900 text-primary font-poppins py-3 rounded-xl" onClick={() => setSend(true)}>
            Send
          </button>
        </form>)
        : (
            <div className="bg-secondary flex flex-col items-center justify-items-center p-6 rounded-xl font-poppins">
                <p>Thank you! Your submission has been received!</p>
            </div>
        )
}
      </div>
    </div>
  );
};

export default SendInfo;
