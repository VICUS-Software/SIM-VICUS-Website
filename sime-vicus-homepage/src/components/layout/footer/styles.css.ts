import {style} from "@vanilla-extract/css";
import {vars} from "../../../styles/theme.css.ts";

export const footer_container = style({
    height: "10%",
    display: "flex",
    flexDirection: "row",
    gridArea: "Footer",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderTopColor: vars.color.borderPrimary,
    borderTopStyle: "solid",
    borderTopWidth: vars.border.borderWidth.thin,
    paddingTop: "1rem"

})

export const footer_text = style({
    fontFamily: vars.fontFamily.light,
    color: vars.color.text,
    fontSize: vars.fontSize.small,

})

export const footer_link = style({
    textDecoration: "none",
    color: vars.color.link,
    fontSize: vars.fontSize.medium,
    fontFamily: vars.fontFamily.link,
})