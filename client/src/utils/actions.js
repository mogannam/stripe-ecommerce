export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
// store data about products in this global state so we don't have to query all data
// from the DB. Also, allows offline functionality.
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
// similar to both above. If we update a product with new categoies
// we need to update the category and products. This also allows data to persist offline too
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";

