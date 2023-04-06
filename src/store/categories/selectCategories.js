import { createSelector } from "reselect";

const selectCategoriesReducer = state => state.categories;

<<<<<<< HEAD
export const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.categories,
)

export const selectCategoriesMap = createSelector(
    [selectCategories],
=======
export const selectCategories = createSelector([selectCategoriesReducer], (categoriesSlice) => categoriesSlice.categories);

export const selectCategoriesMap = createSelector([selectCategories],

>>>>>>> day4
    (categories) => categories.reduce((acc, category) => {
        const { titles, items } = category;
        acc[titles.toLowerCase()] = items;
        return acc;
    }, {})
<<<<<<< HEAD
=======

>>>>>>> day4
)