import React from 'react'

const initaldel={
    del:[]
}
function RecentDel(state=initaldel,action){
    switch(action.type){
        case 'RECDEL':
            return {
                ...state,
                del:[...state.del,action.payload]
            }

        default:
            return state

    }

}


export function recentDel(data){
    return {type:'RECDEL',payload:data}
}
export default RecentDel