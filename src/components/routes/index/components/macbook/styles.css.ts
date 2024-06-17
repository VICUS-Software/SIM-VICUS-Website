import { vars } from "../../../../../styles/theme.css.ts";
import { style } from "@vanilla-extract/css";

export const mac__image = style({
    width: "100%",
    maxWidth: "1229px",
    height: "fit-content",
    backgroundColor: "transparent",
    fill: vars.backgroundColor.primary,
    position: "absolute",
    top: "57%",
    left: "50%",
    transform: "translate(-50%, -50%)", // Center the image
    zIndex: 9,
    maxHeight: "80%",

});

export const mac__video = style({
    width: "100%",
    maxWidth: "1229px",
    overflow: "hidden",
    unicodeBidi: "isolate",
    height: "100%",
    position: "absolute",
    top: "38.6%",
    left: "60.5%",
    transform:
        "translate(-50%, -50%) rotate(-8deg) skew(-8deg) scale(.42, .52)", // Center and transform the video
    zIndex: 8,
    borderTopRightRadius: "25px",
    borderTopLeftRadius: "25px",
    backgroundColor: "transparent",


});

