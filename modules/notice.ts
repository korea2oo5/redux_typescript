// export const ntc = {NTCID: 'notice/NTCID'};
//
// export const getNtc = data => ({
//     type: ntc.NTCID,
//     data
// });
//
// const idInitialState = {
//     data : 0,
// }
//
// export default function reducer(state = idInitialState, action) {
//     switch (action.type) {
//         case ntc.NTCID:
//             return {
//                 ...state,
//                 data: action.data
//             }
//         default:
//             return state
//
//     }
// }
const NTCID = 'notice/NTCID' as const

export const getNtc = (data: string | number | undefined) => ({
    type: NTCID,
    data
})

type NtcAction = ReturnType<typeof getNtc>

type IdState = {
    data: number
}

const idInitialState: IdState = {
    data: 0
}
export default function reducer(state: IdState = idInitialState, action: NtcAction){
    switch (action.type) {
        case NTCID:
            return { data : action.data }
        default:
            return state
    }
}