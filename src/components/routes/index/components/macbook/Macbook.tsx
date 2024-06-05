import laptop from "/laptop.webp";
import video from "/output.webm";
import type { Component } from "solid-js";
import { mac__image, mac__video } from "./styles.css";

export const Macbook: Component = () => {
    return (
        <div>
            <img
                alt="macbook"
                src={laptop}
                width="120"
                class={mac__image}
                height="240"
            />

            <video class={mac__video} src={video} autoplay loop muted />
        </div>
    );
};
