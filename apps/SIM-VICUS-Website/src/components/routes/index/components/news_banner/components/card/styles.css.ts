import { vars } from "../../../../../../../styles/theme.css.ts";
import { style } from "@vanilla-extract/css";

export const card_container = style({
    display: "grid",
    gridTemplateAreas: `"image" "title""date""description"`,
    gridTemplateRows: "2fr,1fr,1fr,2fr",
    backgroundColor: "#101010",
    width: "100%",
    maxWidth: "399px",
    borderRadius: vars.border.borderRadius.smooth.medium,
    boxShadow: `1px solid ${vars.color.secondary}`,
});

export const card_image = style({
    gridArea: "image",
    maxHeight: "200px",
});

export const card_title = style({
    gridArea: "title",
    fontFamily: vars.fontFamily.bold,
    color: vars.color.heading,
    textAlign: "center",
    textWrap: "wrap",
});

export const card_date = style({
    gridArea: "date",
    color: vars.color.secondary,
    fontSize: vars.fontSize.medium,
    textAlign: "center",
});
export const card_description = style({
    gridArea: "description",
    color: vars.color.text,
    fontFamily: vars.color.text,
    textWrap: "wrap",
    fontSize: vars.fontSize.medium,
    textAlign: "center",
});

export const card_image_ = style({
    width: "100%",
    height: "100%",

    borderRadius: vars.border.borderRadius.smooth.medium,
});

export const blank_link = style({
    textDecoration: "none",
});
