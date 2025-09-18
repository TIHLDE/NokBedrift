import Link from "next/link"
import { MegaphoneIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
    return (
        <>
            <section className="relative flex min-h-[60vh] items-center justify-center w-full max-w-5xl md:max-w-7xl">
                <div className="mx-auto max-w-4xl text-center px-4 pt-44 pb-28 flex items-center justify-center flex-col">
                    <p className="text-accent mb-2">Møt morgendagens IT-talenter!</p>
                    <h1 className="mb-4 text-5xl font-extrabold md:text-7xl text-foreground-primary">
                        Samarbeid med TIHLDE
                    </h1>

                    <p className="mb-8 text-lg text-foreground-secondary">
                        Vi tilbyr unike muligheter for bedrifter til å knytte seg til en ny generasjon IT-eksperter. Utforsk våre tilbud og bli en del av nettverket som inspirerer, engasjerer og rekrutterer!
                    </p>
                    <Button
                        asChild
                        variant="default"
                        size="default"
                    >
                        <Link
                            href="/kontakt"

                        >
                            Meld interesse
                            <MegaphoneIcon className="h-6 w-6 stroke-[1.75]" />
                        </Link>
                    </Button>

                </div>
            </section >
        </>
    )
}
