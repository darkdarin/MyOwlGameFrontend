import React, {useState} from 'react';
import {List, ListItem} from "../../../../../../components/List";
import {Themes} from "../themes";
import {Button} from "../../../../../../components/Button";
import {PlusIcon} from "@heroicons/react/24/outline";

type TRoundsProps = {
    rounds: Array<TRound>
}

export function Rounds({rounds}: TRoundsProps) {
    const [activeRoundId, setRound] = useState<number | null>(null);

    const onSelect = (itemId: number): void => setRound(itemId);
    const onRoundAdd = (): void => {
    }
    const activeRound = rounds.find((round) => round.id === activeRoundId) ?? null;

    return (
        <div className="flex h-full">
            <List title="Раунды" button={
                <Button onClick={onRoundAdd}>
                    <PlusIcon className="h-3 w-3 text-white"/>
                </Button>
            }>
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
            <div className="flex-col w-full h-full">
                {activeRound != null && <Themes themes={activeRound.themes}/>}
            </div>
        </div>
    )
}