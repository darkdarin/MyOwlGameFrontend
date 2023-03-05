import React, { useState } from 'react';
import { Questions } from '../Questions';
import { List, ListItem } from 'components/Lists';
import { Button, EButtonStyle } from 'components/Elements/Button';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useGetThemesQuery } from '../../../../../../store/PackEditor/PackEditorApi';

type TProps = {
  roundId: number;
  themes?: TTheme[];
}

export function Themes({ roundId }: TProps): JSX.Element {
  const { data } = useGetThemesQuery(roundId);
  let themes = data ?? [];

  const [activeThemeId, setTheme] = useState<number | null>(null);

  const onSelect = (itemId: number): void => setTheme(itemId);
  const onThemeAdd = (): void => {
  };
  const activeTheme = themes.find((theme) => theme.id === activeThemeId) ?? null;

  return (
    <div className='flex h-full'>
      <List title='Темы раунда' button={
        <Button onClick={onThemeAdd} style={EButtonStyle.Primary}>
          <PlusIcon className='h-3 w-3' />
        </Button>
      }>
        <>
          {themes.map((theme) => (
            <ListItem isActive={activeTheme?.id === theme.id}
                      text={theme.name}
                      key={theme.id}
                      index={theme.id}
                      onSelect={onSelect} />
          ))
          }
        </>
      </List>
      <div className='flex-col w-full h-full'>
        {activeTheme != null && <Questions questions={[]} />}
      </div>
    </div>
  );
}