//import parse from "html-react-parser";
import React from "react";
import { Text } from "slate";
import escapeHtml from "escape-html";
import { format } from "components/Editor/utility"
import { Leaf } from "components/Editor/Leaf"
import { Element } from "components/Editor/Element"


const Content = ({ node }) => {

    let children = <></>
    if (node.children) {
        console.log("children")
        console.log(node)
        children = <span className="this-one">{node.children.map(child => {
            console.log("child")
            console.log(child)
            return <Content node={child} />
        })}</span>
    }


    if (!node.text) {
        console.log("element")
        console.log(node)
        console.log("------")
        return <Element attributes={node.attributes} children={children} element={node} />
    } else {
        return <Leaf attributes={node.attributes} children={node.text} leaf={node} />
    }

}

export default Content;
