import { onCleanup, onMount } from "solid-js";
import { hideFocusRingsDataAttribute } from "./hideFocusRingsDataAttribute.ts";

const hideFocusRings = () =>
    document.body.setAttribute(hideFocusRingsDataAttribute, "true");

const showFocusRings = () =>
    document.body.removeAttribute(hideFocusRingsDataAttribute);

export const useHideFocusRings = (enabled: boolean = true): void => {
    onMount(() => {
        if (enabled) {
            window.addEventListener("keydown", showFocusRings);
            window.addEventListener("mousemove", hideFocusRings);
        }
    });
    onCleanup(() => {
        if (enabled) {
            window.removeEventListener("keydown", showFocusRings);
            window.removeEventListener("mousemove", hideFocusRings);
        }
    });
};
