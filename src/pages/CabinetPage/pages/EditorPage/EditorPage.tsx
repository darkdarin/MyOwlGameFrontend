import React from 'react';
import { EditorContainer } from './EditorContainer';

type TProps = {
  packId: number;
}

export function EditorPage({packId}: TProps): JSX.Element {
  return (
    <EditorContainer packId={packId}/>
  );
}