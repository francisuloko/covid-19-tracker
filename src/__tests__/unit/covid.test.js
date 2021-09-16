import CovidReducer, {
  filterCountry,
  GET_DATA_SUCCESS,
} from '../../redux/covid/covid';

describe('Covid Reducer', () => {
  const data = {
    dates: {},
  };

  const response = {
    "data": {
      "dates": {},
    },
  }

  it('store data in redux state', () => {
    expect(CovidReducer({}, ({ type: GET_DATA_SUCCESS, data }))).toStrictEqual(response);
  });

  it('Filter Country Action', () => {
    expect(CovidReducer({}, (filterCountry("Afghanistan")))).toStrictEqual({ country: "Afghanistan" });
  });
});