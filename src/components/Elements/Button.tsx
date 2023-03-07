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
const defaultStyleClasses = 'border bg-white hover:bg-gray-50 text-gray-800 group-[.button-panel]:border-r';
const primaryStyleClasses = 'border border-transparent bg-blue-600 hover:bg-blue-500 text-white';
const warningStyleClasses = 'border border-transparent bg-yellow-600 hover:bg-yellow-500 text-white';
const criticalStyleClasses = 'border border-transparent bg-red-600 hover:bg-red-500 text-white';
const disabledStyleClasses = 'border bg-white text-gray-300';
const buttonPanelClasses = 'group-[.button-panel]:rounded-none group-[.button-panel]:first:rounded-l group-[.button-panel]:last:rounded-r group-[.button-panel]:not:last:border-r-transparent'

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
      className={joinClasses('relative items-center px-4 py-2 focus:outline-none rounded', buttonPanelClasses, styleClasses)}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}