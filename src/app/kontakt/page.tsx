import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Kontakt() {
  return (
    <div className="flex flex-col">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-140 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-cyan-500 to-indigo-700 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <>
      <section className="relative flex min-h-[60vh] items-center justify-center w-full max-w-5xl md:max-w-7xl">
        <div className="mx-auto max-w-4xl text-center px-4 py-20 sm:py-24 md:py-32 flex items-center justify-center flex-col">
          <p className="text-accent mb-2">Møt morgendagens IT-talenter!</p>
          <h1 className="mb-4 text-4xl sm:text-5xl font-extrabold md:text-7xl text-foreground-primary">
            Send oss en mail!
          </h1>

          <p className="mb-8 text-base sm:text-lg text-foreground-secondary">
          Ta direkte kontakt med Næringsliv og kurs for å diskutere hva som passer deres bedrift best. 
          Vi hjelper dere med å få ut informasjon om deres bedrift!
          </p>
        </div>
      </section>
    </>

      <section className="w-full px-4 pb-32">
        <div className="max-w-5xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
