import { createSelector } from "reselect";

const selectCategoriesReducer = state => state.categories;

export const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.categories,
)

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce((acc, category) => {
        const { titles, items } = category;
        acc[titles.toLowerCase()] = items;
        return acc;
    }, {})
)

export const selectCategoryWithDiscount = createSelector(
    [selectCategories],
    (categories) => categories.reduce((result, category) => {
        category.items.forEach(product => {
            const discount = product.discount || 0;
            if (!result[discount]) {
                result[discount] = { products: [] }
            }
            result[discount].products.push(product);
        })
        return result;
    }, {})


)