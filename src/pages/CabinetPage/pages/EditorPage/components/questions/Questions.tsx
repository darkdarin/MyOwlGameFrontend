import React, {useState} from 'react';
import {QuestionsEditor} from "./QuestionsEditor";
import {HorizontalList, HorizontalListItem} from "../../../../../../components/HorizontalList";

type TQuestionProps = {
    questions: Array<TQuestion>
}

export function Questions({questions}: TQuestionProps) {
    const [activeQuestionId, setQuestion] = useState<number | null>(null);

    const onSelect = (itemId: number): void => setQuestion(itemId);
    const activeQuestion = questions.find((question) => question.id === activeQuestionId) ?? null;

    return (
        <div className="flex row flex-auto flex-shrink-0 antialiased h-full">
            <HorizontalList title="Вопросы">
                <>
                    {questions.map((question) => (
                        <HorizontalListItem isActive={activeQuestion?.id === question.id}
                                            text={question.cost.toString()}
                                            key={question.id}
                                            index={question.id}
                                            onSelect={onSelect}/>
                    ))
                    }
                </>
            </HorizontalList>
            <div className="flex-col w-full">
                {activeQuestion !== null && <QuestionsEditor question={activeQuestion}/>}
            </div>
        </div>
    )
}