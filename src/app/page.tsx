import Hero from "@/components/hero";
import Image from "next/image";
import TihldeLogo from "@/components/miscellaneous/TihldeLogo";
import {Suspense} from "react";
import JobPostList from "@/components/JobPostList";
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ArrowRight} from "lucide-react";
import InfoCard from "@/components/ui/InfoCard";

const bedriftpres = `En bedriftspresentasjon lar dere introdusere organisasjonen for
                     TIHLDE-studentene, vise hva dere tilbyr og hvordan dere jobber.
                     Etter presentasjonen følger middag og mingling med
                     bedriftsrepresentanter.`;

const kursoOgWorkshop = `Et kurs introduserer studentene for relevante faglige erfaringer
                                til arbeidslivet. Det kan starte med en kort presentasjon av
                                bedriften. Vi legger til rette for matservering på skolen eller
                                restaurantbesøk etter kurset.`;

const bedriftbesok = `Under et bedriftsbesøk besøker studentene deres lokaler for et
                                valgfritt arrangement. Dette gir dere en mulighet til å vise
                                frem arbeidsplassen og bli bedre kjent med dem.`;

const bedriftsekskursjon = `Hver høst arrangerer TIHLDE en bedriftsekskursjon til Oslo med
                                60 studenter. Dette gir bedrifter en god mulighet til å vise
                                frem sine lokaler og bli bedre kjent med studentene. Etter
                                besøket legger vi til rette for bespisning og mingling.`;

export default function Hjem() {
    return (
        <div className="relative flex flex-col items-center justify-center w-full overflow-x-clip">
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
            <Hero/>
            {/* Om TIHLDE */}
            <section className="max-w-2xl px-4 py-12 sm:py-16 h-auto justify-center">
                <div className="relative w-full py-4">
                    <TihldeLogo size="large" className="w-full h-auto"/>
                </div>
            </section>

            <div
                aria-hidden="true"
                className="absolute right-0 top-140 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-96"
            >
                <div
                    style={{
                        clipPath:
                            "polygon(100% 61.6%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] rotate-[-30deg] bg-gradient-to-tr from-cyan-500 to-indigo-700 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>

            <div className={"container max-w-6xl px-4 space-y-32"}>
                <InfoCard
                    header={"Bedriftspresentasjoner"}
                    description={bedriftpres}
                    imgSrc={"/bedpres.jpeg"}
                />

                <InfoCard
                    header={"Kurs og workshop"}
                    description={kursoOgWorkshop}
                    imgSrc={"/kurs-workshop.jpeg"}
                    type={"rightAlignImage"}
                />

                <InfoCard
                    header={"Bedriftbesøk"}
                    description={bedriftbesok}
                    imgSrc={"/bedriftsbesøk.jpeg"}
                />

                <InfoCard
                    header={"Bedriftsekskursjon"}
                    description={bedriftsekskursjon}
                    imgSrc={"/bedpres.jpeg"}
                    type={"rightAlignImage"}
                />
            </div>

            <div
                aria-hidden="true"
                className="absolute right-0 top-128 -z-10 transform-gpu overflow-hidden blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            "polygon(100% 61.6%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%)",
                    }}
                    className="relative left-[calc(10%-16rem)] aspect-[1155/678] w-[26.125rem] rotate-[10deg] bg-gradient-to-tr from-cyan-500 to-indigo-700 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>

            <div
                aria-hidden="true"
                className="absolute right-0 top-128 -z-10 transform-gpu overflow-hidden blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            "polygon(100% 61.6%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%)",
                    }}
                    className="relative left-[calc(10%-16rem)] aspect-[1155/678] w-[26.125rem] rotate-[10deg] bg-gradient-to-tr from-cyan-500 to-indigo-700 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>

            <section className="max-w-6xl px-4 py-12 sm:py-16 h-auto justify-center">
                <div className="md:col-span-2">
                    <h2 className="mb-2 text-2xl sm:text-4xl font-bold">Annonser</h2>
                    <p className="mb-4 text-foreground-secondary text-base sm:text-lg leading-relaxed">
                        Publiser relevante stillinger, internships eller trainee-programmer
                        direkte til våre medlemmer. Sikre deg de beste kandidatene!
                    </p>
                </div>
                <Suspense fallback={<div>JobPostListItemLoading</div>}>
                    <JobPostList/>
                </Suspense>
            </section>

            <div
                aria-hidden="true"
                className="absolute right-0 top-2/3 -z-10 transform-gpu overflow-hidden blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            "polygon(100% 61.6%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%)",
                    }}
                    className="relative -left-[calc(20%-16rem)] aspect-[1155/678] w-[36.125rem] rotate-[30deg] bg-gradient-to-tr from-cyan-500 to-indigo-700 opacity-30 sm:left-[calc(20%-30rem)] sm:w-[72.1875rem]"
                />
            </div>

            <section id="linjene" className="relative max-w-6xl px-4 py-12 sm:py-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground-primary">
                    Linjene
                </h2>
                <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mt-4">
                    {[
                        {
                            title: "Digital forretningsutvikling",
                            description:
                                "I krysningen mellom informatikk, økonomi, marked, organisasjon og ledelse møter du de som studerer digital forretningsutvikling.",
                        },
                        {
                            title: "Digital infrastruktur og cybersikkerhet",
                            description:
                                "Studiet kombinerer informatikk med praktiske ferdigheter innen digital infrastruktur og sikkerhet.",
                        },
                        {
                            title: "Dataingeniør",
                            description:
                                "Studiet gir et solid grunnlag for systemutvikling av digitale løsninger, med fokus på funksjonalitet, sikkerhet og brukertilpasning.",
                        },
                        {
                            title: "Digital transformasjon",
                            description:
                                "Studiet gir avansert kompetanse i digital transformasjon, med fokus på hvordan virksomheter kan utnytte digitale teknologier for strategisk utvikling og effektivisering.",
                        },
                    ].map((line) => (
                        <Card key={line.title} className="p-4 sm:p-6 flex flex-col h-full">
                            <div className="flex-1">
                                <h3 className="mb-2 text-xl font-semibold">{line.title}</h3>
                                <p className="text-foreground-secondary">{line.description}</p>
                            </div>
                            <div className="flex justify-end mt-4">
                                <Button variant="link" className="">
                                    <Link href="/linjene" className="flex items-center gap-2">
                                        Les mer <ArrowRight className="w-3 h-3"/>
                                    </Link>
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            <div
                aria-hidden="true"
                className="absolute right-20 bottom-64 -z-10 transform-gpu overflow-hidden blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            "polygon(100% 61.6%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%)",
                    }}
                    className="relative left-[calc(10%-16rem)] aspect-[1155/678] w-[26.125rem] rotate-[10deg] bg-gradient-to-tr from-cyan-500 to-indigo-700 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>

            <section className="max-w-6xl px-4 py-20 sm:py-24 flex flex-col items-center">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground-primary">
                            Ta kontakt med oss
                        </h2>
                        <div className="flex flex-col items-center md:items-start gap-4 mt-4 max-w-xl">
                            <p className="text-foreground-secondary text-base sm:text-lg leading-relaxed">
                                Bedrifter kan ta kontakt med oss for å få mer informasjon om hva
                                vi tilbyr og hvordan vi kan hjelpe dem med å nå ut til våre
                                medlemmer.
                            </p>
                            <Button className="w-fit mt-6">
                                <Link href="/kontakt">Ta kontakt</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <div className="relative w-full max-w-md">
                            <Image
                                src="/kontakt-oss-bilde.png"
                                alt="Kontakt oss"
                                width={600}
                                height={600}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
