const INTITAL_STATE = {
    toDo: ['tw']
};
const toDoArray = (state=INTITAL_STATE, action)=>{
    console.log(state);
    switch(action.type){
        case '@ADD':
            console.log('ADD');
            const {toDo} = state;
            console.log('value', action.todo)
            toDo.push(action.todo);
            return {
                ...state,
                toDo,
            };
        case '@DELETE':
            console.log('DELETE');
            return state;
        case '@ALTER':
            console.log('ALTER');
            return state;
        default:
            return state
    }

}

export default toDoArray