export const setLength = ( len ) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_LENGTH',
            payload: len,
        });
    }
}

export const setLoading = ( flag ) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_LOADING',
            payload: flag,
        });
    }
}

export const setPagelimit = ( newLimit ) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_PAGE_LIMIT',
            payload: newLimit,
        });
    }
}

export const setQuery = ( q ) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_QUERY',
            payload: q,
        });
    }
}