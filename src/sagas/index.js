import { put, call, takeEvery } from 'redux-saga/effects';
import { SET_LOADING, GET_RESTAURANTS, GET_RESTAURANTS_REQUESTED } from '../actions';
import { getRestaurants } from '../api';

function* fetchRestaurants({ payload }) {
  yield put({ type: SET_LOADING });

	const restaurants = yield call(getRestaurants, payload);

  yield put({ type: GET_RESTAURANTS, payload: restaurants })
};

export default function* rootSaga() {
  yield takeEvery(GET_RESTAURANTS_REQUESTED, fetchRestaurants)
};