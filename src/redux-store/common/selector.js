import { createSelector } from 'reselect';

const commonReducerSelector = (state) => state.commonReducer;

export const commonSelector = createSelector(commonReducerSelector, ({ notify }) => ({
  notify,
}));
