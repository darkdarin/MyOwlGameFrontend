export const pack: TPack = {
    author: 'Author',
    name: 'MyPack',
    rounds: [
        {
            id: 1,
            name: 'First round',
            themes: [
                {
                    id: 1,
                    name: 'First theme',
                    questions: [
                        {
                            id: 1,
                            type: 'standart',
                            answer: 'correct',
                            cost: 100,
                            text: 'Text1'
                        },
                        {
                            id: 2,
                            type: 'standart',
                            answer: 'correct',
                            cost: 200,
                            text: 'Text2'
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'Second theme',
                    questions: [
                        {
                            id: 3,
                            type: 'standart',
                            answer: 'correct',
                            cost: 100,
                            text: 'Text1'
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            name: 'Second round',
            themes: [
                {
                    id: 4,
                    name: 'First theme',
                    questions: [
                        {
                            id: 4,
                            type: 'standart',
                            answer: 'correct',
                            cost: 100,
                            text: 'Text1'
                        },
                        {
                            id: 5,
                            type: 'standart',
                            answer: 'correct',
                            cost: 200,
                            text: 'Text2'
                        }
                    ]
                }
            ]
        }
    ]
}