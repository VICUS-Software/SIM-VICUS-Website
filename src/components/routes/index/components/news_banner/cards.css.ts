import { vars } from "../../../../../styles/theme.css.ts";
import { globalStyle, style } from "@vanilla-extract/css";

export const card = style({
    listStyle: "none",
    position: "relative",
    ":before": {
        content: "",
        display: "block",
        paddingBottom: "150%",
        width: "100%",
    },
});

export const cardCategory = style({
    color: "var(--text-light)",
    fontSize: "0.9rem",
    marginBottom: "var(--spacing-s)",
    textTransform: "uppercase",
});

export const cardContent = style({
    left: "0",
    padding: "var(--spacing-l)",
    position: "absolute",
    top: "0",
    color: vars.color.text,
    fontFamily: vars.fontFamily.text,
});

export const cardHeading = style({
    color: vars.color.text,
    fontFamily: vars.fontFamily.heading,
    fontSize: "1.3rem",
    textShadow: "2px 2px 20px rgba(0,0,0,0.2)",
    lineHeight: "1.4",
    wordSpacing: "100vw",
});

export const cardGrid = style({
    display: "grid",
    gridTemplateColumns: "repeat(1,1fr)",
    gap: "1rem",
    maxWidth: "var(--width-container)",
    width: "100%",
    "@media": {
        "(min-width: 540px)": {
            gridTemplateColumns: "repeat(2,1fr)",
        },
        "(min-width: 960px)": {
            gridTemplateColumns: "repeat(4,1fr)",
        },
    },
});

export const cardBackground = style({
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "var(--spacing-l)",
    bottom: "0",
    filter: "brightness(0.75) saturate(1.2) contrast(0.85)",
    left: "0",
    position: "absolute",
    right: "0",
    top: "0",
    transformOrigin: "center",
    transform: "scale(1) translateZ(0)",
    transition: "filter 200ms linear , transform 200ms linear",
    selectors: {
        [`${cardGrid}:hover > ${card}:not(:hover) &`]: {
            filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        [`${card}:hover &`]: {
            transform: "scale(1.05) translateZ(0)",
        },
    },
});

globalStyle(":root", {
    vars: {
        "--background-dark": "#2d3548",
        "--text-light": "rgba 255 ,   255 ,   255 ,   0.6 )",
        "--text-lighter": "rgba 255 ,   255 ,   255 ,   0.9 )",
        "--spacing-s": "8px",
        "--spacing-m": "16px",
        "--spacing-l": "24px",
        "--spacing-xl": "32px",
        "--spacing-xxl": "64px",
        "--width-container": "1200px",
    },
});
