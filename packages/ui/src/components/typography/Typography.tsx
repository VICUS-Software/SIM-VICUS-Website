import { type BoxProps, Box } from "../layout/box/Box.tsx";
import buildDataAttributes, {
    type DataAttributeMap,
} from "../helper/buildDataAtributes.ts";
import type { UseIconProps } from "../../hooks/useIcons/index.ts";
import { alignToFlexAlign } from "../../utils/align.ts";
import { descenderCropFixForWebkitBox } from "../helper/maxLines/maxLines.css.ts";
import { type Component, ParentComponent, Show } from "solid-js";
import { Truncate } from "./components/Truncate.js";

export interface TypographyProps extends Pick<BoxProps, "id" | "component"> {
    icon?: Component<UseIconProps>;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    align?: BoxProps["textAlign"];
    maxLines?: number;
    data?: DataAttributeMap;
}

interface PrivateTypographyProps
    extends TypographyProps,
        Pick<BoxProps, "class"> {}

export const Typography: ParentComponent<PrivateTypographyProps> = (props) => {
    const {
        id,
        component = "span",
        class: className,
        align,
        maxLines,
        icon,
        data,
        children,
        ...restProps
    } = props;

    const isTruncated = maxLines === 1;

    return (
        <Box
            id={id}
            display="block"
            component={component}
            textAlign={align}
            class={[
                className,
                isTruncated ? descenderCropFixForWebkitBox : undefined,
            ]}
            {...buildDataAttributes({ data, validateRestProps: restProps })}
        >
            <Show
                when={icon}
                fallback={
                    <Truncate isTruncate={isTruncated}>
                        {props.children}
                    </Truncate>
                }
            >
                <Box
                    component="span"
                    display="flex"
                    justifyContent={alignToFlexAlign(align)}
                >
                    <Box
                        component="span"
                        display="block"
                        paddingRight="xsmall"
                        flexGrow={0}
                        flexShrink={0}
                        minWidth={0}
                        textAlign={align}
                    >
                        {icon}
                    </Box>
                    <Box component="span" display="block" minWidth={0}>
                        <Truncate isTruncate={isTruncated}>{children}</Truncate>
                    </Box>
                </Box>
            </Show>
        </Box>
    );
};
