import type { StyleRule } from "@vanilla-extract/css";
import { colorModeSelectors } from "./atoms/sprinkles.css.ts";

type CSSProps = Omit<
    StyleRule,
    "selectors" | "@media" | "@supports" | "@container"
>;

const makeSelector = (
    mode: keyof typeof colorModeSelectors,
    styles?: CSSProps
) =>
    !styles || Object.keys(styles).length === 0
        ? {}
        : {
              [colorModeSelectors[mode]]: styles,
          };

interface Color_mode_style {
    lightMode?: CSSProps;
    darkMode?: CSSProps;
}

export const colorModeStyle = ({
    lightMode,
    darkMode,
}: Color_mode_style): StyleRule => ({
    ...(lightMode || darkMode
        ? {
              selectors: {
                  ...makeSelector("light", lightMode),
                  ...makeSelector("dark", darkMode),
              },
          }
        : {}),
});
