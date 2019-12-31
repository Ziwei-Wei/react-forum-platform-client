import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const Editor = () => {
    const editor = useMemo(() => withReact(createEditor()), []);
    const [value, setValue] = useState([
        {
            type: "paragraph",
            children: [{ text: "A line of text in a paragraph." }]
        }
    ]);

    return (
        <Slate
            editor={editor}
            value={value}
            onChange={value => {
                setValue(value);
                const content = JSON.stringify(value);
                localStorage.setItem("content", content);
            }}
        >
            <Editable
                onKeyDown={event => {
                    console.log(event.key);
                }}
            />
        </Slate>
    );
};

export default Editor;
const editor = useMemo(() => withReact(createEditor()), []);
