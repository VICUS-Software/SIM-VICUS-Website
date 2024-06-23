import { omit, mapValues } from "../utils/utils.ts";
import type { StyleRule } from "@vanilla-extract/css";
import { breakpoints } from "./breakpoints.ts";

type CSSProps = Omit<StyleRule, "@media" | "@supports" | "@container">;

export const breakpointQuery = mapValues(
    omit(breakpoints, "mobile"),
    (bp) => `screen and (min-width: ${bp}px)`
);

const makeMediaQuery =
    (breakpoint: keyof typeof breakpointQuery) => (styles?: CSSProps) =>
        !styles || Object.keys(styles).length === 0
            ? {}
            : {
                  [breakpointQuery[breakpoint]]: styles,
              };

const mediaQuery = {
    tablet: makeMediaQuery("tablet"),
    desktop: makeMediaQuery("desktop"),
    wide: makeMediaQuery("wide"),
};

interface ResponsiveStyle {
    mobile?: CSSProps;
    tablet?: CSSProps;
    desktop?: CSSProps;
    wide?: CSSProps;
}

export const responsiveStyle = ({
    mobile,
    tablet,
    desktop,
    wide,
}: ResponsiveStyle): StyleRule => ({
    ...omit(mobile, "@media"),
    ...(tablet || desktop || wide
        ? {
              "@media": {
                  ...mediaQuery.tablet(tablet ?? {}),
                  ...mediaQuery.desktop(desktop ?? {}),
                  ...mediaQuery.wide(wide ?? {}),
              },
          }
        : {}),
});
