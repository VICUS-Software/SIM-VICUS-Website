import { left_page } from "../../../../../styles/routes/index/styled.css.ts";
import type { Component } from "solid-js";
import { intro_button, intro_header, intro_text } from "./styles.css";

export const IntroHeader: Component = () => {
    return (
        <div class={left_page}>
            <h1 class={intro_header}>ZUKUNFTSSICHERE GEBÄUDE & QUARTIERE</h1>
            <p class={intro_text}>
                SIM-VICUS ist ein leistungsfähiges Werkzeug, das Architekt:innen
                und
                <br />
                Ingenieur:innen dabei hilft, zukunftssichere Gebäude und <br />{" "}
                Quartiere mit der Power digitaler Zwillinge zu planen.
            </p>

            <button class={intro_button} type={"button"}>
                erfahre mehr
            </button>
        </div>
    );
};
