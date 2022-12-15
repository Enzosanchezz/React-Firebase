const initialState = {
    empresas : []
}

function rootReducer(state=initialState, action){

    switch (action.type) {
        case "GETITEMS": return{
            ...state,
            empresas : action.payload
        }
        case "GETITEMSBY": return{
            ...state,
            empresas : action.payload
        }
        case "CREATEITEMS" : return{...state}

        default: return state;
        }
    }

export default rootReducer;