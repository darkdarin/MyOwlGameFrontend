import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { EditorPage } from './pages/EditorPage/EditorPage';

export function CabinetPage(): JSX.Element {
  return (
    <Routes>
      <Route path='/*' element={<EditorPage packId={1}/>} />
    </Routes>
  );
}