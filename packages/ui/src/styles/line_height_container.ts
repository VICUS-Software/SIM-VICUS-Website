import { styleVariants } from "@vanilla-extract/css";
import { responsiveStyle } from "./reponsive_styles.js";
import { vars } from "../themes/vars.css.ts";

export const lineHeightContainer = styleVariants(
    vars.textSize,
    ({ mobile, tablet }) =>
        responsiveStyle({
            mobile: { height: mobile.lineHeight },
            tablet: { height: tablet.lineHeight },
        })
);
