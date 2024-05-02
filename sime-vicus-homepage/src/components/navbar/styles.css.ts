import {style} from "@vanilla-extract/css";
import {vars} from "../../styles/theme.css.ts";

export const navbar_style =style({
    position: "sticky",
    gridArea: "Header",
    display: "flex",
    width: "100%",
    height: "50px",
    borderBottomColor: vars.color.borderPrimary,
    borderBottomStyle: "solid",
    borderBottomWidth: vars.border.borderWidth.thin,
    gap: vars.spacing.dynamic.small,
    justifyContent: "space-between"
})

export const navbar_link_style =style({
    textDecoration: "none",
    fontFamily: vars.fontFamily.link,
    color: vars.color.link,
    fontSize: vars.fontSize.medium,
    padding: vars.spacing.dynamic.small,
})
export  const image_wrapper_style =style({
    width: "35%",
    paddingLeft: vars.spacing.dynamic.small,

})
export const navbar_wrapper_style =style({
    display: "flex",
    gap: vars.spacing.dynamic.small,
    alignItems: "center",
    width: "100%",
    height: "100%",
})