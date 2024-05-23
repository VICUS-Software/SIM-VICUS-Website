import {style} from "@vanilla-extract/css";
import {vars} from "../../theme.css.ts";

export const news_heading = style({
    color: vars.color.heading,
    fontFamily:vars.color.heading
})

export const news_text = style({
    color: vars.color.text,
    fontFamily:vars.fontFamily.text,
    fontSize: vars.fontSize.medium
})