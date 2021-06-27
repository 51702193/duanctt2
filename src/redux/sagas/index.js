import { all, fork } from 'redux-saga/effects'
import watchMainPageAsync from './mainPage';
import watchPostNewsAsync from './postNews';

function* rootSaga () {
    yield all([
        fork(watchPostNewsAsync), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
        fork(watchMainPageAsync),
    ]);
}

export default rootSaga;