import {
    type Accessor,
    type ParentComponent,
    type Setter,
    createContext,
    createSignal,
    useContext,
} from "solid-js";

export type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Accessor<Theme>;
    setTheme: Setter<Theme>;
};

const [theme, setTheme] = createSignal<Theme>("dark");

const ThemeContext = createContext<ThemeContextType | undefined>({
    theme: theme,
    setTheme: setTheme,
});

export const ThemeProvider: ParentComponent = (props) => {
    return (
        <ThemeContext.Provider
            value={{
                theme: theme,
                setTheme: setTheme,
            }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext);

    if (!context) {
    }

    return context as ThemeContextType;
}
