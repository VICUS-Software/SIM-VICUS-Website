import { type ParentComponent, Show } from "solid-js";
import { MaxLines } from "../../helper/maxLines/maxLines.js";

type Props = {
    isTruncate: boolean;
};

export const Truncate: ParentComponent<Props> = (props) => {
    return (
        <Show when={props.isTruncate} fallback={props.children}>
            <MaxLines lines={1}>{props.children}</MaxLines>
        </Show>
    );
};
