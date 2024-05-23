import {Match, type ParentComponent, Show, Switch} from "solid-js";
import {darkTheme, lightTheme} from "@styles/theme.css.ts";
import {useTheme} from "@components/layout/theme/Theme_Context.tsx";


export const Theme:ParentComponent = (props) => {
   const  {theme} = useTheme()

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
                <Show when={theme() === "light"}>
                <div class={lightTheme}>
                    {props.children}
                </div>
                </Show>
            </Match>
        </Switch>
    )
}