import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const linjer = [
  {
    title: "Digital forretningsutvikling",
    description:
      "Digital forretningsutvikling handler om å skape og utvikle nye digitale løsninger og forretningsmodeller. Studiet kombinerer informatikk med økonomi, markedsføring, organisasjon og ledelse. Du lærer hvordan teknologi kan brukes til å løse forretningsmessige utfordringer, drive innovasjon og skape konkurransefortrinn. Studentene får innsikt i både tekniske og strategiske sider, og lærer å samarbeide på tvers av fagfelt for å utvikle bærekraftige digitale konsepter.",
  },
  {
    title: "Dataingeniør",
    description:
      "Som dataingeniør får du et solid fundament innen programmering, databaser, systemutvikling og algoritmer. Studiet gir deg ferdigheter til å bygge digitale systemer og applikasjoner med fokus på funksjonalitet, ytelse, sikkerhet og brukervennlighet. Du lærer å kombinere teori med praktiske prosjekter, og utvikler evnen til å jobbe i team for å lage løsninger som møter brukernes behov. Utdanningen åpner for arbeid innen både programvareutvikling, konsulentvirksomhet og teknologiledelse.",
  },
  {
    title: "Digital infrastruktur og cybersikkerhet",
    description:
      "Denne linjen gir deg kunnskap om hvordan digitale systemer bygges, driftes og sikres. Du lærer om nettverk, servere, skyteknologi og hvordan virksomheter kan beskytte seg mot digitale trusler. Utdanningen kombinerer informatikk med praktiske ferdigheter i drift og sikkerhet, slik at du kan bidra til å utvikle robuste og trygge IT-løsninger. Det legges stor vekt på å forstå sårbarheter, risikovurdering og tiltak for å beskytte data, systemer og brukere mot angrep.",
  },
  {
    title: "Digital transformasjon",
    description:
      "Studiet i digital transformasjon gir deg en avansert forståelse av hvordan teknologi endrer virksomheter og samfunnet. Du lærer å analysere og utnytte nye digitale teknologier for å skape vekst, effektivisering og innovasjon i organisasjoner. Faget kombinerer strategisk ledelse, organisasjonsutvikling og teknologiforståelse, og gir deg kompetanse til å lede endringsprosesser i både private og offentlige virksomheter. Fokus ligger på å koble teknologi med forretningsstrategi for å møte fremtidens utfordringer.",
  },
];

export default function Linjene() {
  return (
    <div className="flex flex-col items-center justify-center w-full overflow-x-clip">
      {/* Om TIHLDE Linjene */}
      <section id="linjene" className="max-w-5xl px-4 py-16 mt-32">
        <h1 className="mb-4 text-5xl font-bold md:text-6xl text-foreground-primary">
          Linjene
        </h1>
        <div className="flex flex-col gap-8 mt-8">
          {linjer.map((linje) => (
            <Card key={linje.title}>
              <CardHeader>
                <CardTitle className="mb-2 text-2xl md:text-4xl font-semibold">
                  {linje.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-secondary leading-relaxed text-lg">
                  {linje.description}
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
            Vi er linjeforeningen for datastudenter, og vårt mål er å knytte
            tettere bånd mellom studenter og næringslivet. Gjennom våre
            aktiviteter får bedrifter muligheten til å nå motiverte studenter
            som søker utfordringer og nye muligheter.
          </p>
          <Button className="w-fit mx-auto mt-6">
            <Link href="/kontakt">Kontakt oss</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
