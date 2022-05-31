import * as React from "react";
import { IframeHTMLAttributes } from "react"

type Props = {
    steamID: string;
    content?: string;
} & IframeHTMLAttributes<HTMLIFrameElement>;

export default ({steamID, content, ...rest}: Props) => {
    return (
        <iframe src={`https://store.steampowered.com/widget/${steamID}/${content  ? `/?t=${content}` : ""}`} width="646" height="190" {...rest}></iframe>
    )
}