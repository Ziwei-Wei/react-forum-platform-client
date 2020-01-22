import { Node, Text } from "slate";
import escapeHtml from "escape-html";
import { formatLeaf } from "components/Editor/Leaf"
import { formatElement } from "components/Editor/Element"

/* serializer */
const serialize = node => {
  return JSON.stringify(node);
};

/* de-serializer */
const deserialize = string => {
  return JSON.parse(string);
};

/* formatter */
const format = node => {
  console.log(node)
  if (Text.isText(node)) {
    return escapeHtml(node.text);
  }

  if (node.children) {
    node.children.map(n => format(n)).join("");
  }

  if (node.type) {
    return formatElement(node.children, node)
  } else {
    return formatLeaf(node, node.children)
  }

}

/* converter */
const stringify = node => {
  if (node instanceof Array) {
    return node.map(n => stringify(n)).join("");
  }

  if (node.children) {
    const child = node.children.map(n => stringify(n)).join("");
    if (node.type == "paragraph") {
      return child + "\n";
    } else {
      return child;
    }
  }

  return Node.string(node);
};

export { serialize, deserialize, stringify, format };
