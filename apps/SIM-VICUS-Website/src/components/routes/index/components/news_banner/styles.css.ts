import { vars } from "../../../../../styles/theme.css.ts";
import { style } from "@vanilla-extract/css";


export const  news_container = style({
    marginTop:"10rem",
})
export const card_wrapper = style({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "1.5rem",
    padding: "1rem",
    margin: "1rem",
    marginTop: "9rem",

});

export const heading = style({
    zIndex:30,
    color: vars.color.heading,
    fontFamily: vars.fontFamily.heading,
    textAlign: "center",
});
