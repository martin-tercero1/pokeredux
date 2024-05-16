export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
}

export const featuring = (store) => (next) => (actionInfo) => {
    const featured = [ { name: 'Eddy' }, ...actionInfo.action.payload];
    const updatedActionInfo = {
        ...actionInfo,
        action: { ...actionInfo.action, payload: featured },
    };
    next(updatedActionInfo);
}

// TO - DO ADD A MIDDLEWARE