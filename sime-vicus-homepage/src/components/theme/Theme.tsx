import {createEffect, Match, type ParentComponent, Switch} from "solid-js";
import {darkTheme, lightTheme} from "@styles/theme.css.ts";
import {useTheme} from "@components/theme/Theme_Context.tsx";


export const Theme:ParentComponent = (props) => {
   const  {theme} = useTheme()
    createEffect(()=>{
        console.log(theme());
    })
    return(
        <Switch  fallback={<div class={darkTheme}>
            {props.children}
        </div>}>
            <Match when={theme() === "dark"}>
                <div class={darkTheme}>
                    {props.children}
                </div>
            </Match>
            <Match when={theme() === "light"}>
                <div class={lightTheme}>
                    {props.children}§
                </div>
            </Match>
        </Switch>
    )
}