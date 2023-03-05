import React, { ReactNode } from 'react';
import { joinClasses } from 'utils';

export enum EButtonStyle {
  Primary = 'primary',
  Default = 'default',
  Warning = 'warning',
  Critical = 'critical',
}

type TProps = {
  children: ReactNode;
  onClick: () => void;
  style?: EButtonStyle;
  disabled?: boolean;
}
const defaultStyleClasses = 'border bg-white hover:bg-gray-50 rounded text-gray-800';
const primaryStyleClasses = 'border border-transparent bg-blue-600 hover:bg-blue-500 rounded text-white';
const warningStyleClasses = 'border border-transparent bg-yellow-600 hover:bg-yellow-500 rounded text-white';
const criticalStyleClasses = 'border border-transparent bg-red-600 hover:bg-red-500 rounded text-white';
const disabledStyleClasses = 'border bg-white rounded text-gray-300';

export function Button({ children, onClick, style, disabled }: TProps): JSX.Element {
  style = style ?? EButtonStyle.Default;

  let styleClasses;

  if (disabled) {
    styleClasses = disabledStyleClasses;
  } else {
    switch (style) {
      case EButtonStyle.Default:
        styleClasses = defaultStyleClasses;
        break;
      case EButtonStyle.Primary:
        styleClasses = primaryStyleClasses;
        break
      case EButtonStyle.Warning:
        styleClasses = warningStyleClasses;
        break;
      case EButtonStyle.Critical:
        styleClasses = criticalStyleClasses;
        break;
    }
  }

  return (
    <button
      disabled={disabled}
      className={joinClasses('relative items-center px-4 py-2 focus:outline-none', styleClasses)}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}