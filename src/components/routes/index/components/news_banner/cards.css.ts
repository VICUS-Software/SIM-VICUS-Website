import { vars } from "../../../../../styles/theme.css.ts";
import { globalStyle, style } from "@vanilla-extract/css";

export const card = style({
    listStyle: "none",
    position: "relative",
    width:"400px",
    ":before": {
        content: "",
        display: "block",
        paddingBottom: "150%",
        width: "100%",
    },
});

export const cardCategory = style({
    color: vars.color.text,
    fontSize: "0.9rem",
    marginBottom: "1rem",
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
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    gap: "3rem",
    placeContent:"center",


});

export const cardBackground = style({
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "50px",
    bottom: "0",
    filter: "brightness(0.5) saturate(1.2) contrast(0.85)",
    left: "0",
    position: "absolute",
    right: "0",
    top: "0",
    viewTransitionName:"import_image",
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

