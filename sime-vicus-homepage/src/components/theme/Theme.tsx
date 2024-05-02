import {Match, onMount, type ParentComponent, Show, Switch} from "solid-js";
import {useTheme} from "@components/theme/Theme_Context.tsx";
import {darkTheme,lightTheme} from "@styles/theme.css.ts";

export const Theme:ParentComponent = function (props){
    const {theme,setTheme} = useTheme();

    return(
        <Switch fallback={<div class={darkTheme}>
            {props.children}
        </div>}>
            <Match when={theme() === "dark"}>
                <div class={darkTheme}>
                    {props.children}
                </div>
                </Match>
                <Match when={theme() === "light"}>
                    <div class={lightTheme}>
                        {props.children}
                    </div>
                </Match>
        </Switch>
    )
}