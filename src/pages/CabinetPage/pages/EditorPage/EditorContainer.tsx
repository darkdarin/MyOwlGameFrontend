import React from 'react';
import { Rounds } from './components/Rounds';
import { useGetPackQuery } from '../../../../store/PackEditor/PackEditorApi';
import { Error, Loader } from '../../../../components/Elements';

type TProps = {
  packId: number;
}

export function EditorContainer({ packId }: TProps): JSX.Element {
  const { isLoading, isError, data } = useGetPackQuery(packId);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <Error><div>Произошла ошибка при загрузке пака</div></Error>}
      {!isLoading && !isError && data && <Rounds packId={data.id} />}
    </>
  );
}