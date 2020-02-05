//import parse from "html-react-parser";
import React from "react";
import { Text } from "slate";
import escapeHtml from "escape-html";
import { format } from "components/Editor/utility"
import { Leaf } from "components/Editor/Leaf"
import { Element } from "components/Editor/Element"
import { instanceOf } from "prop-types";


const Content = ({ node }) => {
    console.log(node)
    if (!node) {
        return <></>
    }

    let children = <></>
    if (node instanceof Array) {
        children = <span>{node.map(child => {
            return <Content node={child} />
        })}</span>
    }

    if (node.children) {
        children = <span>{node.children.map(child => {
            return <Content node={child} />
        })}</span>
    }


    if (!node.text) {
        return <Element attributes={node.attributes} children={children} element={node} />
    } else {
        return <Leaf attributes={node.attributes} children={node.text} leaf={node} />
    }

}

export default Content;
