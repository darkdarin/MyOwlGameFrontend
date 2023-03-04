import React, {useState} from 'react';
import {List, ListItem} from "../../../../../../components/List";
import {Themes} from "../themes";

type TRoundsProps = {
    rounds: Array<TRound>
}

export function Rounds({rounds}: TRoundsProps) {
    const [activeRoundId, setRound] = useState<number | null>(null);

    const onSelect = (itemId: number): void => setRound(itemId);
    const activeRound = rounds.find((round) => round.id === activeRoundId) ?? null;

    return (
        <div className="flex row flex-auto flex-shrink-0 antialiased h-full">
            <List title="Раунды">
                <>
                    {rounds.map((round) => (
                        <ListItem isActive={activeRound?.id === round.id}
                                  text={round.name}
                                  key={round.id}
                                  index={round.id}
                                  onSelect={onSelect}/>
                    ))
                    }
                </>
            </List>
            <div className="flex-col w-full">
                {activeRound != null && <Themes themes={activeRound.themes}/>}
            </div>
        </div>
    )
}