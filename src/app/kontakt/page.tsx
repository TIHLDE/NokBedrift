import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Kontakt() {
  return (
    <div className="flex flex-col">
      {/* Om TIHLDE */}
      <section className="w-full px-4 py-32">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-x-16 md:flex-row w-full">
            <div className="pr-0 md:pr-4 pt-20 pb-10">
              <h1 className="mb-6 text-5xl md:text-6xl font-bold text-foreground-primary">
                Kontakt
              </h1>
              <p className="mb-6 text-foreground-secondary text-lg leading-relaxed">
                Vi er linjeforeningen for datastudenter, og vårt mål er å knytte
                tettere bånd mellom studenter og næringslivet. Gjennom våre
                aktiviteter får bedrifter muligheten til å nå motiverte
                studenter som søker utfordringer og nye muligheter.
              </p>
            </div>
            <Image
              src="/kontakt-oss-bilde.png"
              alt="Kontakt"
              className="rounded-lg shadow-lg w-full"
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>

      <section className="w-full px-4 pb-32">
        <div className="max-w-5xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
