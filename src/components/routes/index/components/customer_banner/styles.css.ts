import { vars } from "../../../../../styles/theme.css.ts";
import { keyframes, style } from "@vanilla-extract/css";

export const wrapper = style({
    width: "90%",
    maxWidth: "1536px",
    marginInline: "auto",
    position: "relative",
    height: "100px",
    marginTop: "5rem",
    overflow: "hidden",
    ":after": {
        boxSizing: "border-box",
    },
});

export const customer = style({
    textAlign: "center",
    fontFamily: vars.fontFamily.heading,
    color: vars.color.heading,
});
