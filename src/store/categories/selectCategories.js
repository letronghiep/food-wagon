import { createSelector } from "reselect";

const selectCategoriesReducer = state => state.categories;

export const selectCategories = createSelector([selectCategoriesReducer], (categoriesSlice) => categoriesSlice.categories);

export const selectCategoriesMap = createSelector([selectCategories],

    (categories) => categories.reduce((acc, category) => {
        const { titles, items } = category;
        acc[titles.toLowerCase()] = items;
        return acc;
    }, {})

)