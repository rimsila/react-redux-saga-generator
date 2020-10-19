import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { booksStateSelector } from "@/redux-store/books/selectors";
import {
  fetchBooks,
  toggleBooksBooleanableState,
} from "@/redux-store/books/actions";
import { I18N, NavBar, ShareSocial } from "@/component";
import Layout from "@/components/global/layout";
import Content from "@/components/global/layout/content";
import { Box } from "@material-ui/core";

const NotFound = () => {
  const dispatch = useDispatch();

  const { books, isFetchBooksInProgress } = useSelector(booksStateSelector);

  React.useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  console.log("isFetchBooksInProgress", books);
  // if (isFetchBooksInProgress) return <h1>Loading...</h1>;
  return (
    <Layout title="404">
      <NavBar />
      <I18N i18nKey="title1" />

      <Content>
        <div>
          <h1>Test get data from api</h1>
          <ShareSocial />
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
      </Content>

      <Content maxWidth="sm">
        <div>
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
      </Content>
      <Box bgcolor="red">hello</Box>
    </Layout>
  );
};

export default React.memo(NotFound);
