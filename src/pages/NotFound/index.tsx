import "./styles.css";

import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { booksStateSelector } from "@/redux-store/books/selectors";
import {
  fetchBooks,
  toggleBooksBooleanableState,
} from "@/redux-store/books/actions";

const NotFound = () => {
  const dispatch = useDispatch();

  const { books, isFetchBooksInProgress } = useSelector(booksStateSelector);

  React.useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  console.log("isFetchBooksInProgress", books);

  // if (isFetchBooksInProgress) return <h1>Loading...</h1>;
  return (
    <div id="notfound">
      {/* <div className="notfound">
        <div className="notfound-404">
          <div></div>
          <h1>404</h1>
        </div>
        <h2>Page not found </h2>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
      </div> */}
      <h1>Test get data from api</h1>
      {isFetchBooksInProgress
        ? "Loading.................................................................................................................100%"
        : JSON.stringify(books)}
      <br />
      <br />
      <button
        onClick={() =>
          dispatch(
            toggleBooksBooleanableState({
              isFetchBooksInProgress: !isFetchBooksInProgress,
            }),
          )
        }
      >
        Toggle Loading: {String(isFetchBooksInProgress)}
      </button>
    </div>
  );
};

export default React.memo(NotFound);
