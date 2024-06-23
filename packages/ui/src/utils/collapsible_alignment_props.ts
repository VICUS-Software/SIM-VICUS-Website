import type { JSXElement } from "solid-js";
import { children } from "solid-js";
import {
    type OptionalResponsiveValue,
    normalizeResponsiveValue,
} from "../styles/atoms/sprinkles.css";
import {
    type ResponsiveRangeProps,
    resolveResponsiveRangeProps,
} from "./resolve_responsive_range_props.ts";
import { optimizeResponsiveArray } from "./optimize_reponsive_array.js";
import {
    type Align,
    type AlignY,
    alignToFlexAlign,
    alignYToFlexAlign,
} from "./align.js";

function invertAlignment<Alignment extends string>(alignment: Alignment) {
    if (alignment === "flexStart") {
        return "flexEnd";
    }

    if (alignment === "flexEnd") {
        return "flexStart";
    }

    return alignment;
}

export interface CollapsibleAlignmentProps {
    collapseBelow?: ResponsiveRangeProps["below"];
    align?: OptionalResponsiveValue<Align>;
    alignY?: OptionalResponsiveValue<AlignY>;
    reverse?: boolean;
}

export function resolveCollapsibleAlignmentProps({
    align,
    alignY,
    collapseBelow,
    reverse,
}: CollapsibleAlignmentProps) {
    const [collapseMobile, collapseTablet, collapseDesktop] =
        resolveResponsiveRangeProps({
            below: collapseBelow,
        });

    const rowReverseTablet = collapseMobile && reverse;
    const rowReverseDesktop = (collapseMobile || collapseTablet) && reverse;
    const rowReverseWide =
        (collapseMobile || collapseTablet || collapseDesktop) && reverse;

    const normalizedAlign = normalizeResponsiveValue(
        alignToFlexAlign(align) || "flexStart"
    );
    const {
        mobile: justifyContentMobile = "flexStart",
        tablet: justifyContentTablet = justifyContentMobile,
        desktop: justifyContentDesktop = justifyContentTablet,
        wide: justifyContentWide = justifyContentDesktop,
    } = normalizedAlign;

    return {
        collapseMobile,
        collapseTablet,
        collapseDesktop,
        orderChildren: (childrenNotes: JSXElement) => {
            const childrenArray = children(() => childrenNotes).toArray();
            return !collapseMobile && !collapseTablet && reverse
                ? childrenArray.reverse()
                : childrenArray;
        },
        collapsibleAlignmentProps: {
            display: optimizeResponsiveArray([
                collapseMobile ? "block" : "flex",
                collapseTablet ? "block" : "flex",
                collapseDesktop ? "block" : "flex",
                "flex",
            ]),
            flexDirection: optimizeResponsiveArray([
                collapseMobile ? "column" : "row",
                // eslint-disable-next-line no-nested-ternary
                collapseTablet
                    ? "column"
                    : rowReverseTablet
                      ? "rowReverse"
                      : "row",
                // eslint-disable-next-line no-nested-ternary
                collapseDesktop
                    ? "column"
                    : rowReverseDesktop
                      ? "rowReverse"
                      : "row",
                rowReverseWide ? "rowReverse" : "row",
            ]),
            justifyContent: align
                ? optimizeResponsiveArray([
                      justifyContentMobile,
                      rowReverseTablet
                          ? invertAlignment(justifyContentTablet)
                          : justifyContentTablet,
                      rowReverseDesktop
                          ? invertAlignment(justifyContentDesktop)
                          : justifyContentDesktop,
                      rowReverseWide
                          ? invertAlignment(justifyContentWide)
                          : justifyContentWide,
                  ])
                : undefined,
            alignItems: alignY ? alignYToFlexAlign(alignY) : undefined,
        },
        collapsibleAlignmentChildProps: {
            display: optimizeResponsiveArray([
                collapseMobile && justifyContentMobile !== "flexStart"
                    ? "flex"
                    : "block",
                collapseTablet && justifyContentTablet !== "flexStart"
                    ? "flex"
                    : "block",
                collapseDesktop && justifyContentDesktop !== "flexStart"
                    ? "flex"
                    : "block",
                "block",
            ]),
            justifyContent: optimizeResponsiveArray([
                justifyContentMobile,
                justifyContentTablet,
                justifyContentDesktop,
                justifyContentWide,
            ]),
        },
    } as const;
}
