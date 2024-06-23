import { NewsCard } from "./components/card/NewsCard.tsx";
import {card_wrapper, heading, news_container} from "./styles.css";

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
            <div class={news_container}>
            <h1 class={heading}>Neuigkeiten über SIM-VICUS</h1>

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
                    <a class={card} href="/news/import">
                        <div
                            class={cardBackground}
                            style="background-image: url(/news/import/card.webp)"
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
                    <a class={card} href="#">
                        <div
                            class={cardBackground}
                            style="background-image: url(/news/videos_upload/card.webp)"
                        />
                        <div class={cardContent}>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    placeContent: "space-between",
                                    gap: "1rem",
                                }}>
                                <p class={cardCategory}>Orgaupdate</p>
                                <p class={cardCategory}>28. MÄRZ 2023</p>
                            </div>
                            <h3 class={cardHeading}>
                                {" "}
                                Videos der Schulungen veröffentlich{" "}
                            </h3>

                            <p class={cardCategory}>
                                Wir haben die Videos unserer Schulungen zur
                                Netzsimulation und Gebäudesimulation auf unserem YouTube
                                Kanal veröffentlicht. Viel Spaß beim Anschauen!
                            </p>
                        </div>
                    </a>
                    <a class={card} href="#">
                        <div
                            class={cardBackground}
                            style="background-image: url(/news/launch/card.webp)"
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
                                <p class={cardCategory}>27. FEBRUAR 2023</p>
                            </div>
                            <h3 class={cardHeading}>
                                {" "}
                                SIM-VICUS 1.0.0 veröffentlicht{" "}
                            </h3>

                            <p class={cardCategory}>
                                Viele neue Features – bessere Praxistauglichkeit! Wir
                                haben pausenlos gearbeitet – nun ist es geschafft –
                                SIM-VICUS 1.0 ist da!…
                            </p>
                        </div>
                    </a>
                    <a class={card} href="#">
                        <div
                            class={cardBackground}
                            style="background-image: url(/news/hof/card.webp)"
                        />
                        <div class={cardContent}>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    placeContent: "space-between",
                                    gap: "1rem",
                                }}>
                                <p class={cardCategory}>Orgaupdate</p>
                                <p class={cardCategory}>7. FEBRUAR 2023</p>
                            </div>
                            <h3 class={cardHeading}>
                                {" "}
                                SIM-VICUS am 09.02. beim ADerN-Workshop der Hochschule
                                Hof {" "}
                            </h3>

                            <p class={cardCategory}>
                                Am 27.01.2023 haben wir SIM-VICUS im Rahmen der
                                Veranstaltung “Software & Tools für
                                Fernwärmeanwendungen” des Verbands für
                                Kraft-Wärme-Kopplung, (Fern)Wärme und…
                            </p>
                        </div>
                    </a>
                    <a class={card} href="#">
                        <div
                            class={cardBackground}
                            style="background-image: url(/news/agfw/card.webp)"
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
                                <p class={cardCategory}>7. FEBRUAR 2023</p>
                            </div>
                            <h3 class={cardHeading}>
                                {" "}
                                Vorstellung SIM-VICUS bei der AGFW{" "}
                            </h3>

                            <p class={cardCategory}>
                                7. FEBRUAR 2023
                            </p>
                        </div>
                    </a>
                </div>
            </div>

        </>
    );
};
