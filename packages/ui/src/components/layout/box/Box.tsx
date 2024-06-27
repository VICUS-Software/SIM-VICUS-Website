import clsx, { type ClassValue } from "clsx";

import dedent from "dedent";
import { base as baseReset } from "../../../styles/reset/reset.css.ts";
import { type Atoms, atoms } from "../../../styles/atoms/atoms.ts";
import { type ColorModeValue, sprinkles } from "../../../styles/atoms/sprinkles.css.ts";
import { ColoredBox } from "./components/ColoredBox.tsx";
import type { Background, BoxShadow } from "../../../styles/atoms/atomic_properties.ts";
import buildDataAttributes, {
    type DataAttributeMap,
} from "../../helper/buildDataAtributes.ts";
import {createEffect, ParentComponent, Show} from "solid-js";
import {PolyMorphComponent} from "../../helper/ polymorphComponent/PolyMorphComponent.js";
import {HtmlAttributes, HtmlComponent} from "../../../types/types.js";

export type BoxBackgroundVariant = Background | "customDark" | "customLight";


export interface BoxBaseProps extends Omit<Atoms, 'reset' | 'background'> {
    class?: ClassValue;
    background?: ColorModeValue<BoxBackgroundVariant>;
}

export interface BoxProps
    extends BoxBaseProps,
        Omit<
            HtmlAttributes<HtmlComponent>,
            'width' | 'height' | 'class' | 'data'
        > {
    component?: HtmlComponent;
    data?: DataAttributeMap;
    boxShadow?:BoxShadow
}


export const Box:ParentComponent<BoxProps> =(props) =>{

    const   {
        component = "div",
        class:className,
        background,
        boxShadow,
        data,
        ...restProps,
        ref
    } = props
    const atomProps: Record<string, unknown> = {};
    const nativeProps: Record<string, unknown> = {
        ...(data
            ? // Not validating rest props as Box supports native HTML element props
              // and we do not want to warn against using the native syntax.
            buildDataAttributes({ data, validateRestProps: false })
            : undefined),
    };

    for (const key in restProps) {
        if (sprinkles.properties.has(key as keyof Omit<Atoms, "reset">)) {
            atomProps[key] = restProps[key as keyof typeof restProps];
        } else {
            nativeProps[key] = restProps[key as keyof typeof restProps];
        }
    }

    const userClasses = clsx(className);
    const atomicClasses = atoms({
        reset: typeof component === "string" ? component : "div",
        ...atomProps,
    });

    const combinedClasses = `${atomicClasses}${
        userClasses ? ` ${userClasses}` : undefined
    }`;

    if (process.env.NODE_ENV !== "production") {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        createEffect(() => {
            if (userClasses.includes(baseReset)) {
                throw new Error(
                    dedent`
              Reset class has been applied more than once. This is normally caused when asking for an explicit reset on the \`atoms\` function. This can be removed as Box automatically adds reset classes.

              atoms({
                reset: '...' // <-- Remove this
              })
            `
                );
            }
        }, [userClasses]);
    }

    return (
        <Show when={background || boxShadow }
        fallback={
            <PolyMorphComponent
            ref={ref!}
            component={component}
            class={combinedClasses}
            {...restProps}
            />
        }
        >
            <ColoredBox
                component={component}
                background{background}
                boxShadow={boxShadow}
                className={combinedClasses}
                ref={props.ref}
                {...nativeProps}
            />

        </Show>

    )

}


// TODO: COLORMODE RELEASE
// Remove PublicBox
export type SimpleBackground = Exclude<Background, "bodyDark" | "surfaceDark">;
