import { Node } from "slate";

/* serializer */
const serialize = node => {
  return JSON.stringify(node);
};

/* de-serializer */
const deserialize = string => {
  return JSON.parse(string);
};

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

export { serialize, deserialize, stringify };
