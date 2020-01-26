/* 
a rich text editor based on slate
*/
import React, { useMemo, useState, useCallback } from "react";
import axios from "axios";
import { createEditor, Transforms, Editor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";
import isHotkey from "is-hotkey";
import {
    MdFormatBold as BoldIcon,
    MdFormatItalic as ItalicIcon,
    MdFormatUnderlined as UnderlinedIcon,
    MdFormatListNumbered as NumberedIcon,
    MdFormatListBulleted as BulletedIcon,
    MdFormatClear as ClearIcon,
    MdMood as EmojiIcon
} from "react-icons/md";

import { HOTKEYS, INIT } from "./constants";

import { Element } from "./Element";
import { Leaf } from "./Leaf";
import { toggleMark } from "./controller";
import { MarkToggle, BlockToggle } from "./Toggles";
import { ClearMarkButton, DropDownButton, SendButton } from "./Buttons";
import Emoji from "./Emoji";
import { serialize, deserialize, stringify } from "./utility";

import styles from "./RichTextEditor.module.css";

const RichTextEditor = ({ forumId, topicId, token, update }) => {
    const editor = useMemo(() => withHistory(withReact(createEditor())), []);
    const renderElement = useCallback(props => <Element {...props} />, []);
    const renderLeaf = useCallback(props => <Leaf {...props} />, []);
    const [value, setValue] = useState(
        deserialize(localStorage.getItem("content")) ||
        INIT
    );

    const submit = async () => {
        const data = localStorage.getItem("content");
        console.log(data);
        await axios.post(
            `/api/forum/${forumId}/topic/${topicId}/reply`,
            { content: { children: deserialize(data) } },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        update();
        Transforms.deselect(editor)
        setValue(INIT)
    };

    return (
        <div className={styles.container}>
            <div className={styles.editor}>
                <Slate
                    editor={editor}
                    value={value}
                    onChange={value => {
                        setValue(value);
                        localStorage.setItem("content", serialize(value));
                        console.log(stringify(value));
                    }}
                >
                    <Editable
                        renderElement={renderElement}
                        renderLeaf={renderLeaf}
                        placeholder="Type or paste(Ctrl + V) your text here to start!"
                        spellCheck
                        autoFocus
                        onKeyDown={event => {
                            for (const hotkey in HOTKEYS) {
                                if (isHotkey(hotkey, event)) {
                                    event.preventDefault();
                                    const mark = HOTKEYS[hotkey];
                                    toggleMark(editor, mark);
                                }
                            }
                        }}
                    />
                </Slate>
            </div>

            <div className={styles.toolbar}>
                <MarkToggle editor={editor} format="bold">
                    <BoldIcon className={styles.icon} />
                </MarkToggle>
                <MarkToggle editor={editor} format="italic">
                    <ItalicIcon className={styles.icon} />
                </MarkToggle>
                <MarkToggle editor={editor} format="underline">
                    <UnderlinedIcon className={styles.icon} />
                </MarkToggle>
                <div className={styles.separator} />
                <BlockToggle editor={editor} format="numbered-list">
                    <NumberedIcon className={styles.icon} />
                </BlockToggle>
                <BlockToggle editor={editor} format="bulleted-list">
                    <BulletedIcon className={styles.icon} />
                </BlockToggle>
                <div className={styles.separator} />
                <ClearMarkButton editor={editor}>
                    <ClearIcon className={styles.icon} />
                </ClearMarkButton>
                <div className={styles.separator} />
                <DropDownButton content={Emoji} onPicked={emoji => {
                    Editor.insertText(editor, emoji.native)
                    console.log(emoji.native);
                }}>
                    <EmojiIcon className={styles.icon} />
                </DropDownButton>
                <div className={styles.submit}>
                    <SendButton
                        onClick={() => {
                            submit();
                        }}
                    >
                        Submit
                    </SendButton>
                </div>
            </div>
        </div>
    );
};

export default RichTextEditor;
