import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const studier = [
  {
    title: "Digital forretningsutvikling",
    description:
      "Digital forretningsutvikling kombinerer IT, økonomi og ledelse for å skape forretningsutviklere med tverrfaglig kompetanse. For at samfunnet skal digitaliseres er det nødvendig med ledere som har både teknisk og økonomisk kompetanse. Digital forretningsutvikling er lagt opp med høyt fokus på praktisk erfaring innenfor teamarbeid og kommunikasjon. Studiet søker å utdanne dyktige endringsagenter som kan effektivisere arbeidsprosesser og implementere digitale løsninger i bedrifter.",
  },
  {
    title: "Dataingeniør",
    description:
        "Dataingeniør-studiet kombinerer det beste fra de spesialiserte informatikkutdanningene og de tradisjonelle ingeniørutdanningene. Det legger mye vekt på praktisk utvikling av systemer og programmer, og studentene får et godt grunnlag i datateknikk, matematikk og teknisk-naturvitenskapelige fag, samt varig og verdifull kompetanse om hvordan datateknikk kan benyttes."
  },
  {
    title: "Digital infrastruktur og cybersikkerhet",
    description:
      "Dette bachelorstudiet setter fokus på den drift-tekniske IKT-kompetansen bedrifter etterspør. Studentene lærer planleggingsprosesser og oppsett av virtuelle maskiner med bruk av teknologier som VMWare og HyperV. Videre temaer i studiet er Linux, Windows Server, “Cloud Computing” og overvåkning og sikkerhet i digital infrastruktur.",
  },
  {
    title: "Digital transformasjon",
    description:
      "Digital transformasjon er et veletablert forskningsområde som tar for seg hvordan utøvelse og koordinering av samarbeidsaktiviteter kan støttes ved hjelp av ulike IKT-systemer. Studentene ved denne 2 årige masteren er i stand til å samhandle effektivt i forskjellige tverrfaglige problemløsningsprosesser.",
  },
];

export default function Studiene() {
  return (
    <div className="flex flex-col items-center justify-center w-full overflow-x-clip">
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
      
      <section className="w-full px-4 py-32">
      <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-x-16 md:flex-row w-full">
            <div className="pr-0 md:pr-4 pt-20 pb-10">
              <h1 className="mb-6 text-5xl md:text-6xl font-bold text-foreground-primary">
                Om TIHLDE
              </h1>
              <p className="mb-6 text-foreground-secondary text-lg leading-relaxed">
              TIHLDE (Trondheim IngeniørHøgskoles Linjeforening for Dannede EDBere) er linjeforeningen for bachelorstudiene Dataingeniør, Digital infrastruktur og cybersikkerhet, Digital forretningsutvikling, Informasjonsbehandling samt masterstudiet Digital transformasjon ved AIT, IDI, IIK NTNU på Gløshaugen.
              </p>
            </div>
            <Image
              src="/img/TihldeBackground.jpg"
              alt="Kontakt"
              className="w-full object-contain"
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>

      <section id="studiene" className="max-w-5xl px-4 py-16 mt-32">
        <h1 className="mb-4 text-5xl md:text-6xl font-bold text-foreground-primary">
          Studiene
        </h1>
        <div className="flex flex-col gap-8 mt-8">
          {studier.map((studie) => (
            <Card key={studie.title}>
              <CardHeader>
                <CardTitle className="mb-2 text-2xl md:text-4xl font-semibold">
                  {studie.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-secondary leading-relaxed text-lg">
                  {studie.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="max-w-5xl px-4 py-24 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground-primary">
          Ta kontakt med oss
        </h2>
        {/* call to action section here */}
        <div className="flex flex-col gap-4 mt-4 max-w-xl">
          <p className="text-foreground-secondary text-lg leading-relaxed">
            Bedrifter kan ta kontakt med oss for å få mer informasjon om hva vi
            tilbyr og hvordan vi kan hjelpe dem med å nå ut til våre medlemmer.
          </p>
          <Button className="w-fit mx-auto mt-6">
            <Link href="/kontakt">Kontakt oss</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
