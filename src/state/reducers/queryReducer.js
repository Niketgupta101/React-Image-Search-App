const reducer=(state='RANDOM',action) => {
    switch (action.type) {
        case 'SET_QUERY':
            return action.payload;
        default:
            return state;
    }
}

export default reducer;