import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Kontakt() {
    return (
        <div className="flex flex-col items-center justify-center">
            {/* Om TIHLDE */}
            <section className="space-y-20 max-w-5xl px-4 py-32">
                <div className="flex flex-col gap-x-16 md:flex-row">
                    <div className="pr-4 pt-20 pb-10">
                        <h2 className="mb-6 text-4xl font-bold text-foreground-primary">Kontakt</h2>
                        <p className="mb-6 text-foreground-secondary text-lg leading-relaxed">
                            Vi er linjeforeningen for datastudenter, og vårt mål
                            er å knytte tettere bånd mellom studenter og
                            næringslivet. Gjennom våre aktiviteter får bedrifter
                            muligheten til å nå motiverte studenter som søker
                            utfordringer og nye muligheter.
                        </p>
                    </div>
                    <Image
                        src="/kontakt-oss-bilde.png"
                        alt="Kontakt"
                        className="rounded-lg shadow-lg"
                        width={300}
                        height={300}
                    />
                </div>

                <ContactForm />
            </section>
        </div>
    );
}
