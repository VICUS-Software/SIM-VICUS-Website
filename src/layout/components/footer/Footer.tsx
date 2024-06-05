import { Link } from "@kobalte/core/link";
import type { Component } from "solid-js";
import { footer_container, footer_link, footer_text } from "./styles.css";

export const Footer: Component = () => {
    return (
        <div class={footer_container}>
            <div class={footer_text}>Copyright © 2024 SIM-VICUS</div>
            <div class={footer_text}>
                Icons made by Freepik from www.flaticon.com
            </div>
            <ul>
                <Link class={footer_link}>IMPRESSUM</Link>
                <Link class={footer_link}>DATENSCHUTZERKLÄRUNG</Link>
            </ul>
        </div>
    );
};
