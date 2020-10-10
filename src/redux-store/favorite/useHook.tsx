/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
import * as React from "react";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import action from "./actions";
import { favoriteSelector } from "./selectors";

//init value and func for suggestion

interface State {
  favorite?: unknown[];
}

interface StateUpdate extends State {
  getFavoriteDispatch?: (shopId?: number) => void;
}

const FavoriteCtx = React.createContext<StateUpdate>({} as StateUpdate);

export function FavoriteProvider({ children, ...rest }) {
  // * ------------ state/selector ------------
  const dispatch = useDispatch();
  const { favorite } = useSelector(favoriteSelector);

  const [state, setState] = React.useState({});

  // * ------------------ func ------------------
  //getFavoriteRequest
  const getFavoriteDispatch = (shopId) => {
    dispatch(action.getFavoriteRequest(shopId));
  };

  // * ------------ return  func & state ------------
  const value = React.useMemo(
    () => ({
      // favorite,
    }),
    [],
  );

  return (
    <FavoriteCtx.Provider
      value={{
        ...value,
        //* ---------- return Dispatch/callback func --------------
      }}
      {...rest}
    >
      {children}
    </FavoriteCtx.Provider>
  );
}

export function useFavoriteStore() {
  const context = React.useContext(FavoriteCtx);
  if (!context) {
    throw new Error("You forgot to wrap FavoriteProvider");
  }
  return context;
}
