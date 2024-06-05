import { NewsCard } from "./components/card/NewsCard.tsx";
import { card_wrapper, heading } from "./styles.css";

import type { Component } from "solid-js";
import { githubPagesLinkHelper } from "~/utils/githubPagesLinkHelper";
import {
    card,
    cardBackground,
    cardCategory,
    cardContent,
    cardGrid,
    cardHeading,
} from "./cards.css";

export const NewsBanner: Component = () => {
    return (
        <>
            <h1 class={heading}>Neuigkeiten über SIM-VICUS</h1>
            <div class={card_wrapper}>
                <NewsCard
                    imageUrl={"/news/import/card.webp"}
                    href={"news/import"}>
                    <h4 slot="title">
                        SIM-VICUS 1.1 veröffentlicht – DXF Import und weitere
                        spannende Features
                    </h4>

                    <p slot="date">19. JANUAR 2024</p>
                    <p slot="description">
                        Das SIM-VICUS Team wünscht ein spannendes und
                        erfolgreiches neus Jahr! Auch in der SIM-VICUS Welt wird
                        es in diesem Jahr…
                    </p>
                </NewsCard>
                <NewsCard
                    imageUrl={
                        "/news/building_the_energy_turnaround/card.webp"
                    }
                    href={""}>
                    <h4 slot="title">
                        Schulung Gebäudesimulation Energiewende Bauen
                    </h4>

                    <p slot="date">20. APRIL 2023</p>
                    <p slot="description">
                        Interessierte können kostenlos und digital an der
                        SIM-VICUS Schulung auf der Energiewende Bauen
                        teilnehmen. Ort: Virtuell Zeit: 26.04.23 von 14:00…
                    </p>
                </NewsCard>
                <NewsCard
                    imageUrl={"news/videos_upload/card.webp"}
                    href={""}>
                    <h4 slot="title">Videos der Schulungen veröffentlicht</h4>

                    <p slot="date">28. MÄRZ 2023</p>
                    <p slot="description">
                        Wir haben die Videos unserer Schulungen zur
                        Netzsimulation und Gebäudesimulation auf unserem YouTube
                        Kanal veröffentlicht. Viel Spaß beim Anschauen!
                    </p>
                </NewsCard>
                <NewsCard imageUrl={"news/launch/card.webp"} href={""}>
                    <h4 slot="title">SIM-VICUS 1.0.0 veröffentlicht</h4>

                    <p slot="date">27. FEBRUAR 2023</p>
                    <p slot="description">
                        Viele neue Features – bessere Praxistauglichkeit! Wir
                        haben pausenlos gearbeitet – nun ist es geschafft –
                        SIM-VICUS 1.0 ist da!…
                    </p>
                </NewsCard>
                <NewsCard imageUrl={"news/hof/card.webp"} href={""}>
                    <h4 slot="title">
                        SIM-VICUS am 09.02. beim ADerN-Workshop der Hochschule
                        Hof
                    </h4>

                    <p slot="date">7. FEBRUAR 2023</p>
                    <p slot="description">
                        Am 09.02.2023 werden wir am Workshop der Hochschule Hof
                        zum Thema Neue Simulationslösungen aus Forschung und
                        Entwicklung teilnehmen. Dieser ist…
                    </p>
                </NewsCard>
                <NewsCard imageUrl={"news/agfw/card.webp"} href={""}>
                    <h4 slot="title">Vorstellung SIM-VICUS bei der AGFW</h4>
                    <p slot="date">7. FEBRUAR 2023</p>
                    <p slot="description">
                        Am 27.01.2023 haben wir SIM-VICUS im Rahmen der
                        Veranstaltung “Software & Tools für
                        Fernwärmeanwendungen” des Verbands für
                        Kraft-Wärme-Kopplung, (Fern)Wärme und…
                    </p>
                </NewsCard>
                <div class={cardGrid}>
                    <a class={card} href="#">
                        <div
                            class={cardBackground}
                            style="background-image: url(/news/building_the_energy_turnaround/card.webp)"
                        />
                        <div class={cardContent}>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    placeContent: "space-between",
                                    gap: "1rem",
                                }}>
                                <p class={cardCategory}>Schulung</p>
                                <p class={cardCategory}> 19. JANUAR 2024</p>
                            </div>
                            <h3 class={cardHeading}>
                                Gebäudesimulation Energiewende Bauen
                            </h3>
                            <p class={cardCategory}>
                                Interessierte können kostenlos und digital an
                                der SIM-VICUS Schulung auf der Energiewende
                                Bauen teilnehmen. Ort: Virtuell Zeit: 26.04.23
                                von 14:00…
                            </p>
                        </div>
                    </a>
                    <a class={card} href="#">
                        <div
                            class={cardBackground}
                            style="background-image: url(/assets/news/import/card.webp)"
                        />
                        <div class={cardContent}>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    placeContent: "space-between",
                                    gap: "1rem",
                                }}>
                                <p class={cardCategory}>Softwareupdate</p>
                                <p class={cardCategory}>19. JANUAR 2024</p>
                            </div>
                            <h3 class={cardHeading}>
                                {" "}
                                1.1 DXF Import veröffentlicht{" "}
                            </h3>

                            <p class={cardCategory}>
                                Das SIM-VICUS Team wünscht ein spannendes und
                                erfolgreiches neus Jahr! Auch in der SIM-VICUS
                                Welt wird es in diesem Jahr…
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
};
