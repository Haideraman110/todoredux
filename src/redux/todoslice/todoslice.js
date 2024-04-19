
const initialvalue={
    tododata:[]
}
function todoslice(state=initialvalue,action){
    switch(action.type){

        case 'INSERT':
            return{
                ...state,
                tododata:[...state.tododata,action.payload]
            }

  
        case 'DELETE':
         return{
            ...state,
            tododata:state.tododata.filter(val=>val!==action.payload)
         } 

        default:
            return state
    }

}


//creating action creators

export function adding(data){
    return {type:'INSERT',payload:data}
}

export function deleting(data){
    return {type:'DELETE',payload:data}
}

export default  todoslice