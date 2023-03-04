import React, {useState} from 'react';
import {Questions} from "../questions";
import {List, ListItem} from "../../../../../../components/List";
import {Button} from "../../../../../../components/Button";
import {PlusIcon} from "@heroicons/react/24/outline";

type TThemesProps = {
    themes: Array<TTheme>
}

export function Themes({themes}: TThemesProps) {
    const [activeThemeId, setTheme] = useState<number | null>(null);

    const onSelect = (itemId: number): void => setTheme(itemId);
    const onThemeAdd = (): void => {
    }
    const activeTheme = themes.find((theme) => theme.id === activeThemeId) ?? null;

    return (
        <div className="flex h-full">
            <List title="Темы раунда" button={
                <Button onClick={onThemeAdd}>
                    <PlusIcon className="h-3 w-3 text-white"/>
                </Button>
            }>
                <>
                    {themes.map((theme) => (
                        <ListItem isActive={activeTheme?.id === theme.id}
                                  text={theme.name}
                                  key={theme.id}
                                  index={theme.id}
                                  onSelect={onSelect}/>
                    ))
                    }
                </>
            </List>
            <div className="flex-col w-full h-full">
                {activeTheme != null && <Questions questions={activeTheme.questions}/>}
            </div>
        </div>
    )
}