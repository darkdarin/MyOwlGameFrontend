import React, { useState } from 'react';
import { Button, EButtonStyle, Input } from 'components/Elements';

type TProps = {
  theme: Partial<TTheme>;
  onSave: (theme: Partial<TTheme>) => void;
  onCancel: () => void;
}

export function EditThemeForm({ theme, onSave, onCancel }: TProps): JSX.Element {
  const [localTheme, setLocalTheme] = useState<Partial<TTheme>>(theme);

  const onSaveClick = () => {
    onSave(localTheme);
  };
  const onCancelClick = () => {
    onCancel();
  };

  const onFormChange = (name: string, value: any) => {
    setLocalTheme(prev => ({
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
          <Input name='name' label='Название темы' value={theme.name} onChange={onFormChange}/>
        </div>
      </div>
      <div className='flex flex-row-reverse gap-2 bg-gray-50 p-2'>
        <div><Button onClick={onSaveClick} style={EButtonStyle.Primary}>Сохранить</Button></div>
        <div><Button onClick={onCancelClick}>Отмена</Button></div>
      </div>
    </>
  );
}