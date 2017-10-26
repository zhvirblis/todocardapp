import json from '../todos.json'

const todos = (state = [...json.todos], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    progress: action.progress,
                    details: action.details,
                    cardType: action.cardType
                }
            ]
        case 'DELETE_TODO':
            return state.filter(e=>{
                return e.id !== action.id
            })
        case 'EDIT_TODO':
            return state.map((element) => {
                if (element.id == action.id) {
                    return {
                        id: action.id,
                        name: action.name,
                        progress: action.progress,
                        details: action.details,
                        cardType: action.cardType
                    }
                }
                else {
                    return element
                }
            })
        default:
            return state
    }
}


export default todos