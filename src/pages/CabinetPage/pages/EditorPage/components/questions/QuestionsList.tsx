import React from 'react';

type TQuestionListProps = {
    questions: Array<TQuestion>
}

export function QuestionsList({questions}: TQuestionListProps) {
    return (
        <>
            {questions.map((question: TQuestion) => <div>{question.cost}</div>)}
        </>
    )
}