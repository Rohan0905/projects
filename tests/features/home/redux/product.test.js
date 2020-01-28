import {
  HOME_PRODUCT,
} from '../../../../src/features/home/redux/constants';

import {
  product,
  reducer,
} from '../../../../src/features/home/redux/product';

describe('home/redux/product', () => {
  it('returns correct action by product', () => {
    expect(product()).toHaveProperty('type', HOME_PRODUCT);
  });

  it('handles action type HOME_PRODUCT correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_PRODUCT }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
