import type { Properties } from "csstype";
import type { Breakpoint } from "../styles/breakpoints.ts";
import { responsiveStyle } from "../styles/reponsive_styles.ts";

export const mapToProperty =
    <Property extends keyof Properties<string | number>>(
        property: Property,
        breakpoint?: Breakpoint
    ) =>
    (value: string | number) => {
        const styleRule = { [property]: value };

        return breakpoint
            ? responsiveStyle({ [breakpoint]: styleRule })
            : styleRule;
    };
