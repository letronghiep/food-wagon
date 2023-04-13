import { saveToLocalStorage } from "./localStorage";

export const localStorageMiddleware = ({getState}) => {
    return next => action => {
        const result = next(action);
        saveToLocalStorage(getState().cart);
        return result;
        
    }
}