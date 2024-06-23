import { type ParentComponent, Show, useContext } from "solid-js";
import type { BraidTheme } from "../../themes/make_braid_theme.ts";
import { BraidThemeContext } from "./BraidThemeContext.ts";
import { darkMode } from "../../styles/atoms/sprinkles.css.ts";
import { VanillaThemeContainer } from "./components/VanillaTheme.js";
import { ensureResetImported } from "../../styles/reset/reset_tracker.ts";

export type BraidThemeProviderProps = {
    theme: BraidTheme;
    styledBody?: boolean;
};
if (process.env.NODE_ENV === "development") {
    ensureResetImported();
}

import { useHideFocusRings } from "../helper/hideFocusRings/useHideFocusRings.ts";

import { I18nProvider } from "@kobalte/core/i18n";

export const BraidThemeProvider: ParentComponent<BraidThemeProviderProps> = (
    props
) => {
    const alreadyInBraidProvider = Boolean(useContext(BraidThemeContext));
    const inTestProvider = false;
    useHideFocusRings(!(alreadyInBraidProvider || inTestProvider));

    return (
        <BraidThemeContext.Provider value={props.theme}>
            <I18nProvider locale={"de-DE"}>
                <Show when={props.styledBody}>
                    <style type="text/css">{`
            html,body{margin:0;padding:0;background:${props.theme.background.lightMode}}
            html.${darkMode},html.${darkMode} body{color-scheme:dark;background:${props.theme.background.darkMode}}
          `}</style>
                </Show>
                <VanillaThemeContainer
                    theme={props.theme.vanillaTheme}
                    setDefaultTextTones={!alreadyInBraidProvider}
                >
                    {props.children}
                </VanillaThemeContainer>
            </I18nProvider>
        </BraidThemeContext.Provider>
    );
};
