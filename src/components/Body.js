import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [products, setProducts] = useState([]); // default state value
  const [productList, setProductList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const prodApi = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(prodApi);

    const jsonData = await response.json();

    setProductList(jsonData);
    setProducts(jsonData);
  };

  return productList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="top-box">
        <div className="searchBox">
          <input
            type="text"
            className="search"
            placeholder="search by name"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              filteredSearch = products.filter((prod) =>
                prod.title.toLowerCase().includes(searchText.toLowerCase())
              );
              setProductList(filteredSearch);
            }}
          >
            search
          </button>
        </div>
        <div className="btn-box">
          <button
            className="filter-btn"
            onClick={() => {
              filteredList = products.filter((prod) => prod.rating.rate > 4.0);
              setProductList(filteredList);
            }}
          >
            top rated restaurant
          </button>
          <button
            className="filter-btn"
            onClick={() => {
              filteredList = products.filter(
                (res) => res.category === "electronics"
              );
              setProductList(filteredList);
            }}
          >
            electronics
          </button>
          <button
            className="filter-btn"
            onClick={() => {
              setProductList(products);
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="product-container">
        {productList.map((product) => (
          <ProductsCard key={product.id} prodData={product} />
        ))}
      </div>
    </div>
  );
};

export default Body;
