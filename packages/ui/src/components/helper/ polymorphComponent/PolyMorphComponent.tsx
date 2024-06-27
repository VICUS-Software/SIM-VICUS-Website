import { useLocale } from "@kobalte/core/i18n";
import { HtmlComponent, HtmlAttributes } from "../../../types/types.js";

type Props<T extends HtmlComponent> = {
    component: T;
    ref?: HTMLElement;
    class?: string;
} & HtmlAttributes<T>;

export const PolyMorphComponent = <T extends HtmlComponent>(
    props: Props<T>
) => {
    const { direction, locale } = useLocale();
    const { component: Component, ref, ...nativeProps } = props;
    return (
        <Component
            direction={direction()}
            lang={locale()}
            ref={ref}
            {...nativeProps}
        >
            {props.children}
        </Component>
    );
};
