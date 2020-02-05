/* 
a rich text editor based on slate
*/
import React, { useMemo, useCallback } from "react";
import { createEditor, Editor } from "slate";
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
import { ClearMarkButton, DropDownButton } from "./Buttons";
import Emoji from "./Emoji";
import { serialize, stringify } from "./utility";

import styles from "./RichTextEditPanel.module.css";

const RichTextEditor = ({ value, onChange }) => {
    const editor = useMemo(() => withHistory(withReact(createEditor())), []);
    const renderElement = useCallback(props => <Element {...props} />, []);
    const renderLeaf = useCallback(props => <Leaf {...props} />, []);

    return (
        <div className={styles.container}>
            <div className={styles.editor}>
                <Slate
                    editor={editor}
                    value={value}
                    onChange={value => {
                        onChange(value);
                        console.log(stringify(value));
                    }}
                >
                    <Editable
                        renderElement={renderElement}
                        renderLeaf={renderLeaf}
                        placeholder="What should content be?"
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
                }}>
                    <EmojiIcon className={styles.icon} />
                </DropDownButton>
            </div>
        </div>
    );
};

export default RichTextEditor;
