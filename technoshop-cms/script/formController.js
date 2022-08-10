import {category} from "./elems.js";
import { getCategory } from "./serviceAPI.js";

export const updateCategory= async () => {
    category.textContent = '';
    const categoryList = await getCategory();
    const categoryOption = categoryList.map(cat => {
        const option = document.createElement('option');
        option.value = cat;
        return option;
    });

    category.append(...categoryOption);
};

export const formController = () => {

    updateCategory();
}