import React, { useState } from 'react';
import { EditQuestionForm } from './EditQuestionForm';
import { HorizontalList, HorizontalListItem } from 'components/Lists';
import { Button, EButtonStyle } from 'components/Elements';
import { PlusIcon } from '@heroicons/react/24/outline';
import {
  useAddQuestionMutation,
  useDeleteQuestionMutation,
  useGetQuestionsQuery,
  useUpdateQuestionMutation
} from 'store/PackEditor/PackEditorApi';

type TProps = {
  themeId: number;
}

enum EQuestionType {
  Default = 'default',
  Auction = 'auction',
  Secret = 'secret',
  CatInBag = 'catInBag',
  NoRisk = 'noRisk',
}

const newQuestion: Partial<TQuestion> = {
  cost: 100,
  type: EQuestionType.Default
};

export function Questions({ themeId }: TProps): JSX.Element {
  const { data } = useGetQuestionsQuery(themeId);
  const [addQuestion] = useAddQuestionMutation();
  const [updateQuestion] = useUpdateQuestionMutation();
  const [deleteQuestion] = useDeleteQuestionMutation();

  let questions = data ?? [];

  const [activeQuestionId, setQuestionId] = useState<number>(0);
  //const [activeQuestion, setQuestion] = useState<Partial<TQuestion> | null>(null);

  const activeQuestion = activeQuestionId < 0 ? newQuestion : (questions.find((question) => question.id === activeQuestionId) ?? null);

  const onAddQuestion = (question: Partial<TQuestion>): void => {
    addQuestion({ themeId, question });
  };

  const onEditQuestion = (question: Partial<TQuestion>): void => {
    updateQuestion(question);
  };

  const onDeleteQuestion = (): void => {
    activeQuestionId && deleteQuestion(activeQuestionId);
    setQuestionId(0);
  };

  return (
    <div className='h-full'>
      <HorizontalList title='Вопросы' button={(
        <Button onClick={() => setQuestionId(-1)} style={EButtonStyle.Primary}>
          <PlusIcon className='h-3 w-3' />
        </Button>
      )}>
        <>
          {questions.map((question) => (
            <HorizontalListItem isActive={activeQuestion?.id === question.id}
                                text={question.cost.toString()}
                                key={question.id}
                                index={question.id}
                                onSelect={(itemId: number): void => setQuestionId(itemId)} />
          ))
          }
        </>
      </HorizontalList>
      <div className='mx-auto p-5'>
        {activeQuestion !== null &&
          <EditQuestionForm
            question={activeQuestion}
            onSave={question => activeQuestionId < 0 ? onAddQuestion(question) : onEditQuestion(question)}
            onDelete={onDeleteQuestion}
          />}
      </div>
    </div>
  );
}