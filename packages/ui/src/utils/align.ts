import {
    type OptionalResponsiveValue,
    mapResponsiveValue,
} from "../styles/atoms/sprinkles.css.ts";

export type Align = "left" | "center" | "right";
export type AlignY = "top" | "center" | "bottom";

const alignToFlexAlignLookup = {
    left: "flexStart",
    center: "center",
    right: "flexEnd",
} as const;

export const alignToFlexAlign = (
    align: OptionalResponsiveValue<Align> | undefined
) =>
    align
        ? mapResponsiveValue(align, (value) => alignToFlexAlignLookup[value])
        : undefined;

const alignYToFlexAlignLookup = {
    top: "flexStart",
    center: "center",
    bottom: "flexEnd",
} as const;

export const alignYToFlexAlign = (
    alignY: OptionalResponsiveValue<AlignY> | undefined
) =>
    alignY
        ? mapResponsiveValue(alignY, (value) => alignYToFlexAlignLookup[value])
        : undefined;
