import React, { useState } from 'react';
import { List, ListItem } from 'components/Lists';
import { Themes } from '../Themes';
import { Button, EButtonStyle } from 'components/Elements/Button';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { ConfirmModal, Error, Loader, Modal } from 'components/Elements';
import { EditRoundForm } from './EditRoundForm';
import {
  useAddRoundMutation,
  useDeleteRoundMutation,
  useGetRoundsQuery,
  useUpdateRoundMutation
} from 'store/PackEditor/PackEditorApi';

type TProps = {
  packId: number;
  rounds: TRound[];
}

const newRound: Partial<TRound> = {
  name: '',
  is_final: false
};

export function Rounds({ packId }: TProps): JSX.Element {
  const { isLoading, isError, data } = useGetRoundsQuery(packId);
  const [addRound] = useAddRoundMutation();
  const [updateRound] = useUpdateRoundMutation();
  const [deleteRound] = useDeleteRoundMutation();

  let rounds = data ?? [];

  const [activeRoundId, setRound] = useState<number | null>(null);
  const [addFormShow, setAddFormShow] = useState<boolean>(false);
  const [editFormShow, setEditFormShow] = useState<boolean>(false);
  const [deleteConfirmShow, setDeleteConfirmShow] = useState<boolean>(false);

  const onAddRound = (round: TRound): void => {
    addRound({packId, round});

    setAddFormShow(false);
  };

  const onEditRound = (round: TRound): void => {
    updateRound(round);

    setEditFormShow(false);
  };
  const onDeleteRound = (): void => {
    activeRoundId && deleteRound(activeRoundId);

    setDeleteConfirmShow(false);
  };

  const closeForm = (): void => {
    setAddFormShow(false);
    setEditFormShow(false);
    setDeleteConfirmShow(false);
  };

  const activeRound = rounds.find(item => item.id === activeRoundId);

  return (
    <div className='flex h-full'>
      <List title='Раунды' button={
        <>
          <Button onClick={() => setAddFormShow(true)} style={EButtonStyle.Primary}>
            <PlusIcon className='h-3 w-3' />
          </Button>
          <Button onClick={() => setEditFormShow(true)} disabled={!activeRoundId}>
            <PencilIcon className='h-3 w-3' />
          </Button>
          <Button onClick={() => setDeleteConfirmShow(true)} disabled={!activeRoundId}>
            <TrashIcon className='h-3 w-3' />
          </Button>
        </>
      }>
        <>
          {isLoading && <Loader />}
          {isError && <Error><div>Произошла ошибка при загрузке списка раундов</div></Error>}
          {!isLoading && !isError && rounds.map((round) => (
            <ListItem isActive={activeRound?.id === round.id}
                      text={round.name}
                      key={round.id}
                      index={round.id}
                      onSelect={(itemId: number): void => setRound(itemId)} />
          ))
          }
        </>
      </List>
      <div className='flex-col w-full h-full'>
        {activeRound && <Themes roundId={activeRound.id} themes={activeRound.themes} />}
      </div>
      {addFormShow &&
        <Modal title='Добавление раунда'>
          <EditRoundForm round={newRound} onSave={onAddRound} onCancel={closeForm} />
        </Modal>
      }
      {(editFormShow && activeRound != undefined) &&
        <Modal title='Редактирование раунда'>
          <EditRoundForm round={activeRound} onSave={onEditRound} onCancel={closeForm} />
        </Modal>
      }
      {deleteConfirmShow &&
        <ConfirmModal
          title='Удаление раунда'
          confirmStyle={EButtonStyle.Critical}
          confirmText='Удалить'
          onConfirm={onDeleteRound}
          onCancel={closeForm}>
          Вы действительно хотите удалить раунд? Раунд будет удален вместе со всеми темами и вопросами в нем!
        </ConfirmModal>
      }
    </div>
  );
}