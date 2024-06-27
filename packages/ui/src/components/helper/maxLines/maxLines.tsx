import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as styles from "./MaxLines.css.ts";
import { ParentComponent } from "solid-js";
import clsx from "clsx";
type Props = {
    lines: number;
};
export const MaxLines: ParentComponent<Props> = (props) => {
    return (
        <span
            class={clsx([
                styles.base,
                props.lines > 1 ? styles.multiLine : undefined,
            ])}
            style={
                props.lines > 1
                    ? assignInlineVars({
                          [styles.lineLimit]: String(props.lines),
                      })
                    : undefined
            }
        >
            {props.children}
        </span>
    );
};
