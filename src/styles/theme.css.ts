import {
    black,
    bold,
    light,
    medium,
    regular,
    thin,
    ultraBlack,
    ultraLight,
} from "./font/font.css.ts";
import { createTheme, createThemeContract } from "@vanilla-extract/css";

const vars = createThemeContract({
    color: {
        primary: "",
        surface: "",
        text: "",
        link: "",
        heading: "",
        borderPrimary: "",
        secondary: "",
    },
    spacing: {
        dynamic: {
            small: "",
            medium: "",
            large: "",
        },
        fixed: {
            small: "",
            medium: "",
            large: "",
        },
    },
    fontFamily: {
        heading: "",
        link: "",
        paragraph: "",
        text: "",
        bold: "",
        light: "",
        ultraBlack: "",
        ultraLight: "",
    },
    fontSize: {
        small: "",
        medium: "",
        large: "",
        heading: "",
    },
    border: {
        borderRadius: {
            smooth: {
                small: "",
                medium: "",
                large: "",
            },
            round: {
                full: "",
                half: "",
                quarter: "",
            },
        },
        borderWidth: {
            thin: "",
            solid: "",
            thick: "",
        },
    },
    backgroundColor: {
        primary: "",
        surface: "",
    },
    boxShadow: {
        subtile: "",
        medium: "",
        strong: "",
        glow: "",
    },
});

export const darkTheme = createTheme(vars, {
    color: {
        primary: "#FFFFFF",
        surface: "#575366",
        text: "#FFFFFF",
        heading: "#00B7FF",
        link: "#00B7FF",
        borderPrimary: "rgb(255, 255, 255,0.5)",
        secondary: "#FFB618",
    },
    spacing: {
        dynamic: {
            small: "0.75rem",
            medium: "1rem",
            large: "2rem",
        },
        fixed: {
            small: "8px",
            medium: "16px",
            large: "32px",
        },
    },
    fontFamily: {
        heading: black,
        link: thin,
        paragraph: medium,
        text: regular,
        bold: bold,
        light: light,
        ultraBlack: ultraBlack,
        ultraLight: ultraLight,
    },
    fontSize: {
        small: "0.75rem",
        medium: "1rem",
        large: "2rem",
        heading: "4rem",
    },
    border: {
        borderRadius: {
            smooth: {
                small: "4px" /* Zum Beispiel: 4px für "small" */,
                medium: "8px" /* Zum Beispiel: 8px für "medium" */,
                large: "16px" /* Zum Beispiel: 16px für "large" */,
            },
            round: {
                full: "50%" /* Volle Rundung (50%) */,
                half: "25%" /* Halbe Rundung (25%) */,
                quarter: "10%" /* Viertel Rundung (10%) */,
            },
        },
        borderWidth: {
            thin: "0.5px",
            solid: "1px",
            thick: "2px",
        },
    },
    boxShadow: {
        subtile: "0 2px 4px rgba(0, 0, 0, 0.1)" /* Subtle shadow */,
        medium: "0 4px 8px rgba(0, 0, 0, 0.2)" /* Medium shadow */,
        strong: "0 8px 16px rgba(0, 0, 0, 0.3)" /* Strong shadow */,
        glow: "0 0 10px rgba(0, 0, 255, 0.3)" /* Glowing effect */,
    },
    backgroundColor: {
        primary: "black",
        surface: "rgb(54, 62, 68,0.3)",
    },
});

export const lightTheme = createTheme(vars, {
    color: {
        primary: "#FFFFFF",
        surface: "#0A005A",
        text: "#FFFFFF",
        heading: "#00B7FF",
        link: "#00B7FF",
        borderPrimary: "rgb(255, 255, 255,0.5)",
        secondary: "",
    },
    spacing: {
        dynamic: {
            small: "0.5rem",
            medium: "1rem",
            large: "2rem",
        },
        fixed: {
            small: "8px",
            medium: "16px",
            large: "32px",
        },
    },
    fontFamily: {
        heading: black,
        link: thin,
        paragraph: medium,
        text: regular,
        bold: bold,
        light: light,
        ultraBlack: ultraBlack,
        ultraLight: ultraLight,
    },
    fontSize: {
        small: "0.5rem",
        medium: "1rem",
        large: "2rem",
        heading: "4rem",
    },
    border: {
        borderRadius: {
            smooth: {
                small: "4px" /* Zum Beispiel: 4px für "small" */,
                medium: "8px" /* Zum Beispiel: 8px für "medium" */,
                large: "16px" /* Zum Beispiel: 16px für "large" */,
            },
            round: {
                full: "50%" /* Volle Rundung (50%) */,
                half: "25%" /* Halbe Rundung (25%) */,
                quarter: "10%" /* Viertel Rundung (10%) */,
            },
        },
        borderWidth: {
            thin: "0.5px",
            solid: "1px",
            thick: "2px",
        },
    },
    boxShadow: {
        subtile: "0 2px 4px rgba(0, 0, 0, 0.1)" /* Subtle shadow */,
        medium: "0 4px 8px rgba(0, 0, 0, 0.2)" /* Medium shadow */,
        strong: "0 8px 16px rgba(0, 0, 0, 0.3)" /* Strong shadow */,
        glow: "0 0 10px rgba(0, 0, 255, 0.3)" /* Glowing effect */,
    },
    backgroundColor: {
        primary: "white",
        surface: "#ADB8BD",
    },
});

export { vars };
