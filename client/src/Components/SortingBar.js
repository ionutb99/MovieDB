import React from "react";
import "./MoviePage.css";

const SortingBar = ({ sortedClicked, handleSortedByBarClick, handleAllClick, setSortingCriterion }) => {
  return (
    <div className="sortingBar">
      <div className="sortingBar">
        <div className="allDiv">
          <b><i>All Movies</i></b>
        </div>
        {/* <div className="moviesDiv">
          <b>Movies</b>
        </div>
        <div className="tvshowsDiv">
          <b>TV Shows</b>
        </div> */}
        <div className="sortedByDiv">
          sorted by{" "}
          <svg
            viewBox="0 0 448 512"
            className="sortedByBar"
            onClick={handleSortedByBarClick}
          >
            <path
              fill="currentColor"
              d={
                sortedClicked
                  ? "M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"
                  : "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
              }
            ></path>
          </svg>
          <div
            className={sortedClicked ? "clickedDropdownDiv" : "dropdownDiv"}
          >
            <a href="#all" onClick={handleAllClick} className="dropdown-item">
              All
            </a>
            <a href="#average_note" onClick={() => {setSortingCriterion('Average Vote')}} className="dropdown-item">
              Average Vote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortingBar;
