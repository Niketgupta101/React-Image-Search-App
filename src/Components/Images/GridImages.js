import React from "react";
import "../../App.css";
import Spinner from "../ui/Spinner";
import ImagesItems from "./ImagesItems";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";

const GridImages = ({ items, Change }) => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const { setPagelimit } = bindActionCreators(actionCreators, dispatch);

  return state.isLoading ? (
    <Spinner />
  ) : (
    <>
      <section className="gridContainer">
        {items.map((item) => (
          <ImagesItems key={item.id} item={item}></ImagesItems>
        ))}
      </section>
      <button
        type="submit"
        className="btn btn-primary searchButton"
        style={{
          width: "150px",
          margin: "2.5rem auto",
          position: "relative",
          left: "35vw",
        }}
        onClick={() => {
          setPagelimit(state.pageLimit + 12);
          Change();
        }}
      >
        Load more
      </button>
    </>
  );
};

export default GridImages;
