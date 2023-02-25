import type { IBlock } from '../types'

const page: IBlock[] = [
    {
        id: 'id1',
        blockName: 'PrettyBlock',
        props: {
            title: 'Block 1 title',
            likes: 100500,
        }
    },
    // {
    //     id: 'id2',
    //     blockName: 'UglyBlock',
    //     props: {
    //         title: {
    //             color: 'yellow',
    //         },
    //         text: 'Lorem ipsum blablabla',
    //         author: 'Me',
    //     },
    // },
    {
        id: 'id3',
        blockName: 'PrettyBlock',
        props: {
            title: 'Block 3 title',
            likes: 0,
        }
    },
]

export default page;
