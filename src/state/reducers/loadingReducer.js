const reducer=(state=true,action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return action.payload;
        default:
            return state;
    }
}

export default reducer;