const reducer=(state=12,action) => {
    switch (action.type) {
        case 'SET_PAGE_LIMIT':
            return action.payload;
        default:
            return state;
    }
}

export default reducer;