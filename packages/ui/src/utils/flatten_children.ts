import { flatten } from "solid-js/web";

function FlattenedChildren(props) {
    const flatChildren = flatten(() => props.children);
    return <>{flatChildren()}</>;
}