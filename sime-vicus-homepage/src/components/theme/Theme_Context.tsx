import {
    type ParentComponent,
    type Accessor,
    type Setter,

    createContext,
    createSignal,
    useContext, Match, Switch, createEffect
} from "solid-js";
import {darkTheme, lightTheme} from "@styles/theme.css.ts";


type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Accessor<Theme>
    setTheme: Setter<Theme>

};

const [theme,setTheme] = createSignal<Theme>("dark");


const ThemeContext = createContext<ThemeContextType|undefined>({
    theme:theme,
    setTheme:setTheme
});

export const ThemeProvider:ParentComponent =  (props) => {


    return(
        <ThemeContext.Provider value={
            {
                theme: theme,
                setTheme: setTheme
            }
        }>
            {props.children}
        </ThemeContext.Provider>
    )
}

export function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext);
    console.log(context);
    if (!context) {
        console.log(context)

    }

    return context as ThemeContextType;
}