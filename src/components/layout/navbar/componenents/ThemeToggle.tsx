import {type Component, onMount, Show} from "solid-js";
import {type Theme, useTheme} from "@components/layout/theme/Theme_Context.tsx";

import {Moon} from "@components/layout/navbar/componenents/icons/moon.tsx";
import {Sun} from "@components/layout/navbar/componenents/icons/sun.tsx";
import {button} from "@components/layout/navbar/componenents/icons/styles.css.ts";


export const ThemeToggle:Component = () => {
    const {setTheme, theme} = useTheme()
   onMount(()=> {
           const theme:Theme | null = localStorage.getItem("theme")as Theme | null ;
       if (theme){
           setTheme(theme);
       }
   })
    return (
        <Show when={theme() === "dark"} fallback={
            <button type={"button"} onClick={()=>{
                setTheme("dark")
                localStorage.setItem("theme" ,"dark")
            }} class={button}>
            <Sun/>
            </button>
        }>
            <button type={"button"} onClick={()=>{
                setTheme("light")
                localStorage.setItem("theme","light")
            }} class={button}>

            <Moon/>
            </button>
        </Show>
    )
}