import ActionTypes from '../constants/ActionTypes';
import { AsyncStorage } from 'react-native';
import Service from '../service';

export function loginAsync(username, password) {
  return function(dispatch) {
    return new Promise((resolve, reject) => {
      dispatch({
        type: ActionTypes.LOGIN_USER_REQUEST
      });

      Service.login(username, password)
        .then(response => {
          dispatch({
            type: ActionTypes.LOGIN_USER_SUCCESS,
            payload: response
          });

          saveUserAsync(response)(dispatch)
            .then(() => {
              resolve(response);
            });
        })
        .catch(error => {
          dispatch({
            type: ActionTypes.LOGIN_USER_FAIL,
            payload: error
          });

          reject(error);
        });
    });
  }
}

export function registerAsync(username, password, confirmpassword) {
  return function(dispatch) {
    return new Promise((resolve, reject) => {
      dispatch({
        type: ActionTypes.REGISTER_USER_REQUEST
      });

      Service.register(username, password, confirmpassword)
        .then(response => {
          dispatch({
            type: ActionTypes.REGISTER_USER_SUCCESS,
            payload: response
          });

          saveUserAsync(response)(dispatch)
            .then(() => {
              resolve(response);
            });
        })
        .catch(error => {
          dispatch({
            type: ActionTypes.REGISTER_USER_FAIL,
            payload: error
          });

          reject(error);
        });
    });
  }
}

export function getUserAsync() {
  return function(dispatch) {
    return new Promise((resolve, reject) => {
      dispatch({
          type: ActionTypes.GET_USER_REQUEST
      });

      AsyncStorage.getItem('user')
        .then(u => JSON.parse(u))
        .then(user => {
          if (!user) {
            throw new Error('User is null');
          }

          dispatch({
            type: ActionTypes.GET_USER_SUCCESS,
            payload: user
          });

          dispatch({
            type: ActionTypes.SET_USER,
            payload: user
          });

          resolve(user);
        })
        .catch(error => {
          dispatch({
            type: ActionTypes.GET_USER_FAIL,
            payload: error
          });

          reject(error);
        });
    });
  }
}


export function saveUserAsync(user) {
  return function(dispatch) {
    return new Promise((resolve, reject) => {
      dispatch({
        type: ActionTypes.SAVE_USER_REQUEST
      });

      user = JSON.stringify(user);

      AsyncStorage.setItem('user', user)
        .then(() => {
          dispatch({
            type: ActionTypes.SAVE_USER_SUCCESS
          });

          resolve();
        })
        .catch(error => {
          dispatch({
            type: ActionTypes.SAVE_USER_FAIL,
            payload: error
          });

          reject(error);
        });
    });
  }
}

export function removeUserAsync() {
  return function(dispatch) {
    return new Promise((resolve, reject) => {
      dispatch({
        type: ActionTypes.REMOVE_USER_REQUEST
      });

      AsyncStorage.removeItem('user')
        .then(() => {
          dispatch({
            type: ActionTypes.REMOVE_USER_SUCCESS
          });

          resolve();
        })
        .catch(error => {
          dispatch({
            type: ActionTypes.REMOVE_USER_FAIL,
            payload: error
          });

          reject();
        });
    });
  }
}

export function getTablesAsync(token) {
  return function(dispatch) {
    return new Promise((resolve, reject) => {
      dispatch({
        type: ActionTypes.GET_TABLES_REQUEST
      });

      Service.getTables(token)
        .then(response => {
          dispatch({
            type: ActionTypes.GET_TABLES_SUCCESS,
            payload: response
          });

          resolve(response);
        })
        .catch(error => {
          dispatch({
            type: ActionTypes.GET_TABLES_FAIL,
            payload: error
          });

          reject(error);
        });
    });
  }
}

export function getTableDataAsync(token, route) {
  return function(dispatch) {
    return new Promise((resolve, reject) => {
      dispatch({
        type: ActionTypes.GET_TABLE_DATA_REQUEST
      });

      Service.getTableData(token, route)
        .then(response => {
          dispatch({
            type: ActionTypes.GET_TABLE_DATA_SUCCESS,
            payload: response
          });

          resolve(response);
        })
        .catch(error => {
          dispatch({
            type: ActionTypes.GET_TABLE_DATA_FAIL,
            payload: error
          });

          reject(error);
        });
    });
  }
}

export function saveTableDataAsync(token, route, data) {
  return function(dispatch) {
    return new Promise((resolve, reject) => {
      dispatch({
        type: ActionTypes.SAVE_TABLE_DATA_REQUEST
      });

      Service.saveTableData(token, route, data)
        .then(response => {
          dispatch({
            type: ActionTypes.SAVE_TABLE_DATA_SUCCESS,
            payload: response
          });

          getTableDataAsync(token, route)(dispatch)
            .then(() => {
              resolve(response)
            });
        })
        .catch(error => {
          dispatch({
            type: ActionTypes.SAVE_TABLE_DATA_FAIL,
            payload: error
          });

          reject(error);
        });
    });
  }
}

export function editTableDataAsync(token, route, data, id) {
  return function(dispatch) {
    return new Promise((resolve, reject) => {
      dispatch({
        type: ActionTypes.EDIT_TABLE_DATA_REQUEST
      });

      Service.editTableData(token, route, data, id)
        .then(response => {
          dispatch({
            type: ActionTypes.EDIT_TABLE_DATA_SUCCESS,
            payload: response
          });

          getTableDataAsync(token, route)(dispatch)
            .then(() => {
              resolve(response)
            });
        })
        .catch(error => {
          dispatch({
            type: ActionTypes.EDIT_TABLE_DATA_FAIL,
            payload: error
          });

          reject(error);
        });
    });
  }
}

export function setCurrentTable(tableInfo) {
  return {
    type: ActionTypes.SET_CURRENT_TABLE,
    payload: tableInfo
  }
}