"use client"

import Navbar from "@/components/navigation/TopBar"
import BottomBar from "@/components/navigation/BottomBar"
import Footer from "@/components/navigation/Footer"

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
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      {/* Om TIHLDE Linjene */}
      <section id="linjene" className="max-w-5xl px-4 py-16 mt-32">
        <h1 className="mb-4 text-5xl font-bold md:text-6xl">Linjene</h1>
        <div className="flex flex-col gap-8 mt-8">
          {linjer.map((linje) => (
            <div
              key={linje.title}
              className="p-6"
            >
              <h3 className="mb-2 text-xl font-semibold">{linje.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {linje.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <BottomBar />
      <Footer />
    </div>
  )
}
