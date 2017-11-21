import ActionTypes from '../constants/ActionTypes';

const initialState = {
  user: {},
  logs: [],
  tablesInfo: [],
  currentTable: {},
  tableData:[],
  isLoading: false
};

const getTimeStamp = () => {
  const date = new Date();

  const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

  return `[${hours}:${minutes}:${seconds}]`;
}

export default function (state = initialState, action) {
  switch(action.type) {


    case ActionTypes.LOGIN_USER_REQUEST: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Авторизация пользователя`],
        isLoading: true
      };
    }

    case ActionTypes.LOGIN_USER_SUCCESS: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Авторизация прошла успешна\n`],
        user: action.payload,
        isLoading: false
      };
    }

    case ActionTypes.LOGIN_USER_FAIL: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Ошибка авторизации\n`],
        isLoading: false
      };
    }




    case ActionTypes.REGISTER_USER_REQUEST: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Регистрация пользователя`],
        isLoading: true
      };
    }

    case ActionTypes.REGISTER_USER_SUCCESS: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Регистрация прошла успешна\n`],
        user: action.payload,
        isLoading: false
      };
    }

    case ActionTypes.REGISTER_USER_FAIL: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Ошибка регистрации\n`],
        isLoading: false
      };
    }




    case ActionTypes.SET_USER: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Установка пользователя из хранилищца\n`],
        user: action.payload
      };
    }




    case ActionTypes.SAVE_USER_REQUEST: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Сохранение пользователя`],
        isLoading: true
      };
    }

    case ActionTypes.SAVE_USER_SUCCESS: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Пользователь сохранен успешно\n`],
        isLoading: false
      };
    }

    case ActionTypes.SAVE_USER_FAIL: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Ошибка сохранения пользователя\n`],
        isLoading: false
      };
    }





    case ActionTypes.GET_USER_REQUEST: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Получение пользователя`],
        isLoading: true
      };
    }

    case ActionTypes.GET_USER_SUCCESS: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Пользователь получен успешно\n`],
        user: action.payload,
        isLoading: false
      };
    }

    case ActionTypes.GET_USER_FAIL: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Ошибка получения пользователя\n`],
        isLoading: false
      };
    }





    case ActionTypes.REMOVE_USER_REQUEST: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Удаление пользователя`],
        isLoading: true
      };
    }

    case ActionTypes.REMOVE_USER_SUCCESS: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Пользователь удален успешно\n`],
        user: {},
        isLoading: false
      };
    }

    case ActionTypes.REMOVE_USER_FAIL: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Ошибка удаления пользователя\n`],
        isLoading: false
      };
    }



    case ActionTypes.GET_TABLES_REQUEST: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Получение таблиц`],
        isLoading: true
      };
    }

    case ActionTypes.GET_TABLES_SUCCESS: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Таблицы получены успешно\n`],
        tablesInfo: action.payload,
        isLoading: false
      };
    }

    case ActionTypes.GET_TABLES_FAIL: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Ошибка получения таблиц\n`],
        isLoading: false
      };
    }




    case ActionTypes.GET_TABLE_DATA_REQUEST: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Получение данных таблицы`],
        isLoading: true
      };
    }

    case ActionTypes.GET_TABLE_DATA_SUCCESS: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Данные таблицы получены успешно\n`],
        tableData: action.payload,
        isLoading: false
      };
    }

    case ActionTypes.GET_TABLE_DATA_FAIL: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Ошибка получения данных таблицы\n`],
        isLoading: false
      };
    }




    case ActionTypes.SAVE_TABLE_DATA_REQUEST: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Сохранение данных таблицы`],
        isLoading: true
      };
    }

    case ActionTypes.SAVE_TABLE_DATA_SUCCESS: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Данные таблицы успешно сохранены\n`],
        isLoading: false
      };
    }

    case ActionTypes.SAVE_TABLE_DATA_FAIL: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Ошибка сохранения данных таблицы\n`],
        isLoading: false
      };
    }





    case ActionTypes.EDIT_TABLE_DATA_REQUEST: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Редактирование данных таблицы`],
        isLoading: true
      };
    }

    case ActionTypes.EDIT_TABLE_DATA_SUCCESS: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Данные таблицы успешно отредактированы\n`],
        isLoading: false
      };
    }

    case ActionTypes.EDIT_TABLE_DATA_FAIL: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Ошибка редактирования данных таблицы\n`],
        isLoading: false
      };
    }







    case ActionTypes.SET_CURRENT_TABLE: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Установка текущей таблицы\n`],
        currentTable: action.payload
      };
    }





    default:
      return state;
  }
}