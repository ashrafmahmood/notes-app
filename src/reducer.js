export const initialState = {
    notes:[]
};


const reducer = (state, action) => {
    switch(action.type) {
        case 'GET_ALL_NOTES' :
            return {
                ...state,
                notes: action.allNote
            }
        case 'ADD_NOTE' :
            return {
                ...state,
                notes: [...state.notes, action.noteData]
            }
        case 'DELETE_NOTE':
            const index = state.notes.findIndex(
                (note) => note.id === action.id
              );
              let newNotes = [...state.notes];
        
              if (index >= 0) {
                newNotes.splice(index, 1);
              }
            return {
                ...state,
                notes: newNotes
            }
        default:
            return state;
    }

};

export default reducer;