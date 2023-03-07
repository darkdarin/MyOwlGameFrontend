import React, { useState } from 'react';
import { Button, EButtonStyle, Input } from 'components/Elements';

type TProps = {
  question: Partial<TQuestion>,
  onSave: (question: Partial<TQuestion>) => void,
  onDelete: () => void
}

export function EditQuestionForm({ question, onSave, onDelete }: TProps): JSX.Element {
  const [localQuestion, setLocalQuestion] = useState<Partial<TQuestion>>(question);

  const onSaveClick = () => {
    onSave(localQuestion);
  };
  const onDeleteClick = () => {
    onDelete();
  };

  const onFormChange = (name: string, value: any) => {
    setLocalQuestion(prev => ({
      ...prev,
      ...{
        [name]: value
      }
    }))
  }

  return (
    <form action='#' method='POST'>
      <div className='grid grid-cols-6 gap-6 mb-3'>
        <div className='col-span-3'>
          <Input name='cost' label='Тип вопроса' value={question.type} onChange={onFormChange}/>
        </div>
        <div className='col-span-3'>
          <Input name='cost' label='Стоимость вопроса' value={question.cost} onChange={onFormChange}/>
        </div>
      </div>
      <div className='flex flex-row-reverse gap-2 bg-gray-50 p-2'>
        <div><Button onClick={onSaveClick} style={EButtonStyle.Primary}>Сохранить</Button></div>
        <div><Button onClick={onDeleteClick} style={EButtonStyle.Critical}>Отмена</Button></div>
      </div>
    </form>
  );
}