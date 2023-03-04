import React from 'react';

type TQuestionEditorProps = {
    question: TQuestion
}

export function QuestionsEditor({question}: TQuestionEditorProps) {
    return (
        <div className="container mx-auto">
            <h1>{question.text}</h1>
        </div>
    )
}