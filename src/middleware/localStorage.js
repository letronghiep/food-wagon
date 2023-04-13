export const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cartItems', serializedState);
    } catch (error) {
        console.log(error)
    }
}

export const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('cartItems');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (error) {
        console.log(error);
        return undefined
    }
}