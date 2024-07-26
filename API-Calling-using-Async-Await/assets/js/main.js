import { getData } from "./http.js";

const getProducts = async () => {
  try {
    const productCategory = await getData("https://fakestoreapi.com/products/categories");
    console.log("ProductCategory: ", productCategory);
    const productList = await getData("https://fakestoreapi.com/products");
    console.log("ProductList: ", productList);
  } catch (err) {
    console.log("Err: ", err);
  }
};

getProducts();