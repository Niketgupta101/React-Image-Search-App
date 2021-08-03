const reducer=(state=0,action) => {
    switch (action.type) {
        case 'SET_LENGTH':
            return action.payload;
        default:
            return state;
    }
}

export default reducer;