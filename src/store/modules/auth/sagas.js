import { takeLatest, call, put, all } from 'redux-saga/effects';
import { showMessage } from 'react-native-flash-message';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Baerer ${token}`;

    yield put(signInSuccess(token, user));
  } catch (err) {
    showMessage({
      message: 'Login',
      description: 'Falha na autenticação, verifique seu email/senha',
      type: 'danger',
    });

    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });
    showMessage({
      message: 'Cadastro de Usuário',
      description: 'Usuário cadastrado com sucesso',
      type: 'success',
    });
  } catch (err) {
    showMessage({
      message: 'Cadastro de Usuário',
      description: 'Falha no cadastro, verifique seus dados',
      type: 'danger',
    });
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Baerer ${token}`;
  }
}

export function signOut() {
  showMessage({
    type: 'MeetApp',
    message: 'Volte sempre!',
  });
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
