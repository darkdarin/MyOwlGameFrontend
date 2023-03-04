import React from 'react';
import {Rounds} from "./components/rounds";
import {connect} from "react-redux";

type TEditorContainerProps = {
    pack: TPack
}

function EditorContainer({pack}: TEditorContainerProps): JSX.Element {
    return (
        <Rounds rounds={pack.rounds}/>
    )
}

const mapStateToProps = ({ editor }: TCabinetState): TEditorContainerProps => {
    return {
        pack: editor.pack
    }
}

export default connect(mapStateToProps)(EditorContainer);