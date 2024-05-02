import {globalStyle} from "@vanilla-extract/css";
import {colorPalette} from "./colorPalette.ts";


globalStyle("html, body, #root",{
    margin:0,
    padding:0,
    width:"100%",
    height:"100%",
    "@media": {
        '(prefers-color-scheme:dark)': {
            background: colorPalette.dark.backgroundColor.primary,
        },
        '(prefers-color-scheme:light)': {
            background: colorPalette.light.backgroundColor.primary,
        }
    },
})