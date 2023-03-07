import React, { useState } from 'react';
import { Questions } from '../Questions';
import { List, ListItem } from 'components/Lists';
import { Button, EButtonStyle } from 'components/Elements/Button';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import {
  useAddThemeMutation,
  useDeleteThemeMutation,
  useGetThemesQuery,
  useUpdateThemeMutation
} from 'store/PackEditor/PackEditorApi';
import { ConfirmModal, Error, Loader, Modal } from 'components/Elements';
import { ButtonPanel } from 'components/Elements/ButtonPanel';
import { EditThemeForm } from './EditThemeForm';

type TProps = {
  roundId: number;
}

const newTheme: Partial<TTheme> = {
  name: ''
};

export function Themes({ roundId }: TProps): JSX.Element {
  const { isLoading, isError, data } = useGetThemesQuery(roundId);
  const [addTheme] = useAddThemeMutation();
  const [updateTheme] = useUpdateThemeMutation();
  const [deleteTheme] = useDeleteThemeMutation();

  let themes = data ?? [];

  const [activeThemeId, setTheme] = useState<number | null>(null);
  const [addFormShow, setAddFormShow] = useState<boolean>(false);
  const [editFormShow, setEditFormShow] = useState<boolean>(false);
  const [deleteConfirmShow, setDeleteConfirmShow] = useState<boolean>(false);

  const activeTheme = themes.find((theme) => theme.id === activeThemeId) ?? null;

  const onAddTheme = (theme: TTheme): void => {
    addTheme({ roundId, theme });

    setAddFormShow(false);
  };

  const onEditTheme = (theme: TTheme): void => {
    updateTheme(theme);

    setEditFormShow(false);
  };
  const onDeleteTheme = (): void => {
    activeThemeId && deleteTheme(activeThemeId);

    setDeleteConfirmShow(false);
  };

  const closeForm = (): void => {
    setAddFormShow(false);
    setEditFormShow(false);
    setDeleteConfirmShow(false);
  };

  return (
    <div className='flex h-full'>
      <List title='Темы раунда' button={
        <ButtonPanel>
          <Button onClick={() => setAddFormShow(true)} style={EButtonStyle.Primary}>
            <PlusIcon className='h-3 w-3' />
          </Button>
          <Button onClick={() => setEditFormShow(true)} disabled={!activeThemeId}>
            <PencilIcon className='h-3 w-3' />
          </Button>
          <Button onClick={() => setDeleteConfirmShow(true)} disabled={!activeThemeId}>
            <TrashIcon className='h-3 w-3' />
          </Button>
        </ButtonPanel>
      }>
        <>
          {isLoading && <Loader />}
          {isError && <Error>
            <div>Произошла ошибка при загрузке списка тем</div>
          </Error>}
          {!isLoading && !isError && themes.map((theme) => (
            <ListItem isActive={activeTheme?.id === theme.id}
                      text={theme.name}
                      key={theme.id}
                      index={theme.id}
                      onSelect={(itemId: number): void => setTheme(itemId)} />
          ))
          }
        </>
      </List>
      <div className='flex-col w-full h-full'>
        {activeTheme != null && <Questions themeId={activeTheme.id} />}
      </div>
      {addFormShow &&
        <Modal title='Добавление темы'>
          <EditThemeForm theme={newTheme} onSave={onAddTheme} onCancel={closeForm} />
        </Modal>
      }
      {(editFormShow && activeTheme != undefined) &&
        <Modal title='Редактирование темы'>
          <EditThemeForm theme={activeTheme} onSave={onEditTheme} onCancel={closeForm} />
        </Modal>
      }
      {deleteConfirmShow &&
        <ConfirmModal
          title='Удаление темы'
          confirmStyle={EButtonStyle.Critical}
          confirmText='Удалить'
          onConfirm={onDeleteTheme}
          onCancel={closeForm}>
          Вы действительно хотите удалить тему? Тема будет удалена вместе со всеми вопросами в ней!
        </ConfirmModal>
      }
    </div>
  );
}