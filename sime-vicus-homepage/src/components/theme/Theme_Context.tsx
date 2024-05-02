import {
    type ParentComponent,
    type Accessor,
    type Setter,
    onMount,
    createContext,
    createSignal,
    useContext
} from "solid-js";
import {createStore, type SetStoreFunction} from "solid-js/store"

type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Accessor<Theme>
    setTheme: Setter<Theme>

};
const ThemeContext = createContext<ThemeContextType>();
// biome-ignore lint/complexity/useArrowFunction: <explanation>
export const ThemeProvider:ParentComponent = function (props){
     const [theme,setTheme] = createSignal<Theme>("dark");
     onMount(()=>{
        const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches


         const stored_theme = localStorage.getItem("theme");


            if(stored_theme) {

                setTheme(stored_theme as Theme);
            }
            else {
                if(darkMode) {
                    console.log(darkMode)
                    setTheme("dark")
                }
                else {
                    setTheme("light")
                }
            }
     })

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
    if (!context) {
        return {
            theme: () => "dark",
            setTheme: () => {}
        }
    }
    return context;
}