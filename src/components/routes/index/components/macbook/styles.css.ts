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
    "@media": {
        "screen and (max-width: 379px)": {
            top: "100%",
        },
        "screen and (max-width: 390px)": {
            top: "200%",
        },
        "screen and (max-width: 412px)": {
            top: "82%",
        },
        "screen and (max-width: 415px)": {
            top: "72%",
        },
        "screen and (max-width: 540px)": {
            top: "92%",
        },
        "screen and (max-width: 768px)": {
            top: "62.5%",
        },
        "screen and (max-width: 820px)": {
            top: "53.5%",
        },
        "screen and (max-width: 853px)": {
            top: "399px",
        },
        "screen and (max-width: 1024px)": {
            top: "103.5%",
        },

        "screen and (max-width: 1280px)": {
            top: "77.5%",
        },
    },
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

    "@media": {
        "screen and (max-width: 378px)": {
            top: "85.5%",
            left: "66.5%",
        },

        "screen and (max-width: 415px)": {
            top: "62.5%",
            left: "67%",
        },
        "screen and (max-width: 768px)": {
            top: "47.5%",
            left: "66.5%",
        },
        "screen and (max-width: 820px)": {
            top: "40.15%",
            left: "66.5%",
        },

        "screen and (max-width: 912px)": {
            top: "33.5%",
        },
        "screen and (max-width: 1024px)": {
            top: "31.5%",
            left: "66.5%",
        },

        "screen and (max-width: 1280px)": {
            top: "63.5%",
            left: "66%",
        },
    },
});

export const stone_wall = style({
    display: "block",
    height: "90%",
    overflowClipMargin: "content-box",
    overflow: "clip",
    backgroundColor: "transparent",
    width: "100%",
});
export const stone_space = style({
    zIndex: 10,
    gridArea: "mac",
    height: "900px",
    width: "100%",
    background: "transparent",
    aspectRatio: "auto 2560 / 1199",
    overflowClipMargin: "content-box",
    overflow: "clip",
    gridTemplateColumns: "1f,auto",
    gridTemplateAreas: `"mac_top"
    "mac_bottom"   
    `,
});

export const stone_space_top = style({
    gridArea: "mac_top",
    width: "90%",
    height: "40%",
    margin: "1rem",
});

export const stone_space_bottom = style({
    gridArea: "mac_bottom",

    width: "100%",
    height: "90%",
});

export const space = style({
    gridArea: "mac",
    height: "100%",
    maxHeight: "900px",
    width: "100%",
    overflow: "hidden",
    marginTop: "-1rem",
    backgroundColor: "transparent",
});

export const customer_banner_wrapper = style({
    gridArea: "mac",
    marginTop: "40rem",
    zIndex: 20,
});

export const background_wrapper = style({
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr",
    gridTemplateAreas: `"mac"
                        "bottom"
    `,
});

export const index_page_wrapper = style({
    gridArea: "mac",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateAreas: `"left" "right"`,
});

export const left_page = style({
    padding: "1rem",
    gridArea: "left",
    zIndex: 10,
});

export const next_section = style({
    gridArea: "bottom",
});
