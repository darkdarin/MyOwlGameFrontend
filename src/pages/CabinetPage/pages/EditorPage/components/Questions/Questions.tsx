import React, { useState } from 'react';
import { QuestionEditor } from './QuestionEditor';
import { HorizontalList, HorizontalListItem } from 'components/Lists';
import { Button, EButtonStyle } from 'components/Elements';
import { PlusIcon } from '@heroicons/react/24/outline';

type TProps = {
  questions: Array<TQuestion>
}

export function Questions({ questions }: TProps): JSX.Element {
  const [activeQuestionId, setQuestion] = useState<number | null>(null);

  const onSelect = (itemId: number): void => setQuestion(itemId);
  const onQuestionAdd = (): void => {
  };
  const activeQuestion = questions.find((question) => question.id === activeQuestionId) ?? null;

  return (
    <div className='h-full'>
      <HorizontalList title='Вопросы' button={(
        <Button onClick={onQuestionAdd} style={EButtonStyle.Primary}>
          <PlusIcon className='h-3 w-3' />
        </Button>
      )}>
        <>
          {questions.map((question) => (
            <HorizontalListItem isActive={activeQuestion?.id === question.id}
                                text={question.cost.toString()}
                                key={question.id}
                                index={question.id}
                                onSelect={onSelect} />
          ))
          }
          <li>

          </li>
        </>
      </HorizontalList>
      <div className='mx-auto p-5'>
        {activeQuestion !== null && <QuestionEditor question={activeQuestion} />}
      </div>
    </div>
  );
}