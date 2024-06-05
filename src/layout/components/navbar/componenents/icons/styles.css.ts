import { vars } from "../../../../../styles/theme.css.ts";
import { style } from "@vanilla-extract/css";

export const moon = style({
    width: "20px",
    stroke: vars.color.link,
    maxWidth: "20px",
});

export const sun = style({
    width: "20px",
    stroke: "#E1A331",
    maxWidth: "20px",
});

export const button = style({
    width: "20px",
    maxWidth: "20px",
    backgroundColor: "transparent",
    border: "none",
});
