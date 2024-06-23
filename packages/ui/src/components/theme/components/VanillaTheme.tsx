import type { ParentComponent } from "solid-js";
import * as typographyStyles from "../../../../styles/typography/typography.css.ts";

type Props = { theme: string; setDefaultTextTones: boolean };
const textTones = [
    typographyStyles.lightModeTone.light,
    typographyStyles.darkModeTone.dark,
].join(" ");
export const VanillaThemeContainer: ParentComponent<Props> = (props) => {
    return (
        <div
            class={`${props.theme}${props.setDefaultTextTones ? ` ${textTones}` : ""}`}
        >
            {props.children}
        </div>
    );
};
