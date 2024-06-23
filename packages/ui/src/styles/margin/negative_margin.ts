import clsx from "clsx";
import type { Space } from "../atoms/atoms.ts";
import type { RequiredResponsiveValue } from "../atoms/sprinkles.css.js";
import { resolveResponsiveProp } from "../../utils/resolve_responsive_prop.js";
import * as styles from "./negative_margin.css.js";

const directionStyles = {
    top: styles.top,
    right: styles.right,
    bottom: styles.bottom,
    left: styles.left,
};

export const negativeMargin = (
    direction: Exclude<keyof typeof styles, "preventCollapsePseudo">,
    space?: RequiredResponsiveValue<Space>
) =>
    space
        ? clsx([
              direction === "top" || direction === "bottom"
                  ? styles.preventCollapsePseudo[direction]
                  : undefined,
              resolveResponsiveProp(
                  space,
                  directionStyles[direction].mobile,
                  directionStyles[direction].tablet,
                  directionStyles[direction].desktop,
                  directionStyles[direction].wide
              ),
          ])
        : null;
