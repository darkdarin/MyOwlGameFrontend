import React, { useState } from 'react';
import { Button, CheckBox, EButtonStyle, Input } from 'components/Elements';

type TProps = {
  round: Partial<TRound>;
  onSave: (round: Partial<TRound>) => void;
  onCancel: () => void;
}

export function EditRoundForm({ round, onSave, onCancel }: TProps): JSX.Element {
  const [localRound, setLocalRound] = useState<Partial<TRound>>(round);

  const onSaveClick = () => {
    onSave(localRound);
  };
  const onCancelClick = () => {
    onCancel();
  };

  const onFormChange = (name: string, value: any) => {
    setLocalRound(prev => ({
      ...prev,
      ...{
        [name]: value
      }
    }))
  }

  return (
    <>
      <div className='grid grid-cols-6 gap-6 mb-3 p-5'>
        <div className='col-span-6'>
          <Input name='name' label='Название раунда' value={round.name} onChange={onFormChange}/>
        </div>
        <div>
          <CheckBox name='is_final' label='Финальный раунд' onChange={onFormChange} checked={round.is_final} />
        </div>
      </div>
      <div className='flex flex-row-reverse gap-2 bg-gray-50 p-2'>
        <div><Button onClick={onSaveClick} style={EButtonStyle.Primary}>Сохранить</Button></div>
        <div><Button onClick={onCancelClick}>Отмена</Button></div>
      </div>
    </>
  );
}