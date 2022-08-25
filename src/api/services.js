import { request } from "../helpers/requestHelper";
import categories from "../bbdd/categories.json";
import company from "../bbdd/company.json";
import menu from "../bbdd/menu.json";
import products from "../bbdd/products.json"

const API = [
    {
        url: 'category',
        data: categories
    },
    {
        url: 'company',
        data: company
    },
    {
        url: 'menu',
        data: menu
    },
    {
        url: 'product',
        data: products
    },
];

const getData = (url) => {
    return API.filter( api => api.url == url)[0].data;
}

const getId = (url) => {
  const urlSplit = url.split('/');
  const id = parseInt(urlSplit[urlSplit.length - 1]);
  return id;
};
//Simulating get request 
export const getAll = async (url) => {
    const data = getData(url);
    const response = await request(data);
    return response;
}
//Simulating get request with a parameter
export const getSubCategories= async (url) => {
    const id = getId(url);
    const urlData = url.split("/")[0];
    const data = getData(urlData).filter(category => category.id == id)[0].subcategories;
    const response = await request(data);
    return response;
}
//Simulating Post requests
export const getProductsFromSubsCategory = async (url, body) => {
    const { categoryId, subCategoryId } = body;
    const urlData = url.split("/")[0];
    const data = getData(urlData).filter(product => product.category_id == categoryId && product.subcategory_id == subCategoryId);
    const response = await request(data);
    return response;
}

