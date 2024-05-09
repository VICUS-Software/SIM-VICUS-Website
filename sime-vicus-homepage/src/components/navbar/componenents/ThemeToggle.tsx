import {type Component, Show} from "solid-js";
import {useTheme} from "@components/theme/Theme_Context.tsx";

import {Moon} from "@components/navbar/componenents/icons/moon.tsx";
import {Sun} from "@components/navbar/componenents/icons/sun.tsx";
import {button} from "@components/navbar/componenents/icons/styles.css.ts";

export const ThemeToggle:Component = () => {
    const {setTheme, theme} = useTheme()
    return (
        <Show when={theme() === "dark"} fallback={
            <button type={"button"} onClick={()=>{
                setTheme("dark")}} class={button}>
            <Sun/>
            </button>
        }>
            <button type={"button"} onClick={()=>{
                setTheme("light")
            }} class={button}>

            <Moon/>
            </button>
        </Show>
    )
}