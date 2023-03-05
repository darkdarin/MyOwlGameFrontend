import React, { useState } from 'react';
import { Switch } from '@headlessui/react';

type TProps = {
  name: string;
  label: string;
  checked?: boolean;
  onChange?: (name: string, value: boolean) => void;
}

export function CheckBox({ name, label, checked, onChange }: TProps): JSX.Element {
  const [enabled, setEnabled] = useState(checked ?? false);

  const onCheckChanged = (checked) => {
    setEnabled(checked);
    onChange && onChange(name, checked);
  };

  return (
    <>
      <Switch
        checked={enabled}
        onChange={onCheckChanged}
        className={`${
          enabled ? 'bg-blue-600' : 'bg-gray-200'
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
      <span className=''>{label}</span>
    </>

  );
}