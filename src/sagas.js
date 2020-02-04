import { GET_USER, GET_USER_LIST } from "./actions";
import { all, takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {getUsersSuccessful, getUserSuccessful} from "./actions";

export default function* rootSaga()  {

    function* getUser({payload}) {
        const {data} = yield call(axios.get, `https://jsonplaceholder.typicode.com/users/${payload}`);
        yield put(getUserSuccessful(data))
    }

    function* getUsersList() {
        const {data} = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');
        yield put(getUsersSuccessful(data))
    }

    yield all([
        takeLatest(GET_USER, getUser),
        takeLatest(GET_USER_LIST, getUsersList)
    ])
}