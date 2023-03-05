import React from 'react';
import { Modal } from './Modal';
import { Button, EButtonStyle } from './Button';

type TProps = {
  children: React.ReactNode;
  title: string;
  confirmStyle?: EButtonStyle;
  confirmText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmModal({ children, title, confirmStyle, confirmText, onConfirm, onCancel }: TProps): JSX.Element {
  return (
    <Modal title={title} onClose={onCancel}>
      <div className='mb-3 p-5'>
          {children}
      </div>
      <div className='flex flex-row-reverse gap-2 bg-gray-50 p-2'>
        <div><Button onClick={onConfirm} style={confirmStyle ?? EButtonStyle.Primary}>{confirmText ?? 'Подтвердить'}</Button></div>
        <div><Button onClick={onCancel}>Отмена</Button></div>
      </div>
    </Modal>
  );
}