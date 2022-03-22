const types = {
    setFilter: 'set - filter'
}

const initialStore = {};

const storeReducer = (state:any, action:any) => {
    switch (action.type) {
        case types.setFilter:
            return {
                ...state,
                type: action.payload
            }
        default: 
            return state;
    }
}

export {initialStore, types}
export default storeReducer