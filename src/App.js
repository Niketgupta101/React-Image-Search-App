import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import axios from "axios";

import "./App.css";
import Search from "./Components/ui/Search";
import GridImages from "./Components/Images/GridImages";

const client_id=process.env.REACT_APP_CLIENT_ID;

function App() {
  const [items, setItems] = useState();
  const [itemslen, setItemslen] = useState();
  const [query, setQuery] = useState("Random");
  const [pageLimit, setPagelimit] = useState(12);

  const dispatch = useDispatch();

  const { setLength, setLoading } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const result = await axios(
        `https://api.unsplash.com/search/photos?page=1&per_page=${pageLimit}&query=${query}&client_id=${client_id}`
      );
      setItemslen(result.data.total);
      setLength(result.data.total);
      setItems(result.data.results);
      setLoading(false);
    };
    fetchItems();
  }, [query,pageLimit]);

  return (
    <div className="Container">
      <Search
        Change={(q) => {
          setQuery(q);
        }}
      />
      <div className="resultBox">
        <h1>{query}</h1>
        <p>{itemslen} images have been found</p>
        <GridImages
          items={items}
          Change={() => {
            setPagelimit(pageLimit + 12);
          }}
        />
      </div>
    </div>
  );
}

export default App;
