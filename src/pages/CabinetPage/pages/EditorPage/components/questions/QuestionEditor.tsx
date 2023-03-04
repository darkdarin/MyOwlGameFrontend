import React from 'react';
import {Input} from "../../../../../../components/Input";

type TQuestionEditorProps = {
    question: TQuestion
}

export function QuestionEditor({question}: TQuestionEditorProps) {
    return (
        <form action="#" method="POST">
            <div className="grid grid-cols-6 gap-6 mb-3">
                <div className="col-span-3">
                    <Input name="cost" label="Тип вопроса" value={question.type} />
                </div>
                <div className="col-span-3">
                    <Input name="cost" label="Стоимость вопроса" value={question.cost} />
                </div>
            </div>
            <div className="grid grid-cols-6 gap-6">

            </div>
        </form>
    )
}