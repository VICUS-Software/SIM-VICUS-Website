import { JSX } from "solid-js";

export type HtmlComponent = keyof JSX.IntrinsicElements;
export type HtmlAttributes<T extends HtmlComponent> = JSX.HTMLAttributes<T>;
