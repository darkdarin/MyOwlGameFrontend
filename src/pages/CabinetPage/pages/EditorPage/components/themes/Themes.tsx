import React, {useState} from 'react';
import {Questions} from "../questions";
import {List, ListItem} from "../../../../../../components/List";

type TThemesProps = {
    themes: Array<TTheme>
}

export function Themes({themes}: TThemesProps) {
    const [activeThemeId, setTheme] = useState<number | null>(null);

    const onSelect = (itemId: number): void => setTheme(itemId);
    const activeTheme = themes.find((theme) => theme.id === activeThemeId) ?? null;

    return (
        <div className="flex row flex-auto flex-shrink-0 antialiased h-full">
            <List title="Темы раунда">
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
            <div className="flex-col w-full">
                {activeTheme != null && <Questions questions={activeTheme.questions}/>}
            </div>
        </div>
    )
}