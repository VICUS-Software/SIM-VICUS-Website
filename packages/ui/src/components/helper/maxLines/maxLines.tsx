import { assignInlineVars } from "@vanilla-extract/dynamic";
import { Box } from "../../Box/Box";
import * as styles from "./MaxLines.css.ts";
import type { ParentComponent } from "solid-js";

type Props = {
    lines: number;
};
export const MaxLines: ParentComponent<Props> = (props) => {
    <Box
        component="span"
        className={[
            styles.base,
            props.lines > 1 ? styles.multiLine : undefined,
        ]}
        style={
            props.lines > 1
                ? assignInlineVars({ [styles.lineLimit]: String(props.lines) })
                : undefined
        }
    >
        {props.children}
    </Box>;
};
