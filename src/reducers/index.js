import ActionTypes from '../constants/ActionTypes';

const initialState = {
  user: {},
  logs: [],
  tablesInfo: [],
  currentTable: {},
  tableData:[],
  isLoading: false,
  isTableLoading: false,
  valuableCustomer: {},
  popularGoods: [],
  valuableProviders: []
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
        isTableLoading: true
      };
    }

    case ActionTypes.LOGIN_USER_SUCCESS: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Авторизация прошла успешна\n`],
        user: action.payload,
        isTableLoading: false
      };
    }

    case ActionTypes.LOGIN_USER_FAIL: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Ошибка авторизации\n`],
        isTableLoading: false
      };
    }


    case ActionTypes.REGISTER_USER_REQUEST: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Регистрация пользователя`],
        isTableLoading: true
      };
    }

    case ActionTypes.REGISTER_USER_SUCCESS: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Регистрация прошла успешна\n`],
        user: action.payload,
        isTableLoading: false
      };
    }

    case ActionTypes.REGISTER_USER_FAIL: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Ошибка регистрации\n`],
        isTableLoading: false
      };
    }


    case ActionTypes.SET_USER: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Установка пользователя из хранилищца\n`],
        user: action.payload
      };
    }


    case ActionTypes.SAVE_USER_REQUEST: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Сохранение пользователя`],
        isTableLoading: true
      };
    }

    case ActionTypes.SAVE_USER_SUCCESS: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Пользователь сохранен успешно\n`],
        isTableLoading: false
      };
    }

    case ActionTypes.SAVE_USER_FAIL: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Ошибка сохранения пользователя\n`],
        isTableLoading: false
      };
    }


    case ActionTypes.GET_USER_REQUEST: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Получение пользователя`],
        isTableLoading: true
      };
    }

    case ActionTypes.GET_USER_SUCCESS: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Пользователь получен успешно\n`],
        user: action.payload,
        isTableLoading: false
      };
    }

    case ActionTypes.GET_USER_FAIL: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Ошибка получения пользователя\n`],
        isTableLoading: false
      };
    }


    case ActionTypes.REMOVE_USER_REQUEST: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Удаление пользователя`],
        isTableLoading: true
      };
    }

    case ActionTypes.REMOVE_USER_SUCCESS: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Пользователь удален успешно\n`],
        user: {},
        isTableLoading: false
      };
    }

    case ActionTypes.REMOVE_USER_FAIL: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Ошибка удаления пользователя\n`],
        isTableLoading: false
      };
    }


    case ActionTypes.GET_TABLES_REQUEST: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Получение таблиц`],
        isTableLoading: true
      };
    }

    case ActionTypes.GET_TABLES_SUCCESS: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Таблицы получены успешно\n`],
        tablesInfo: action.payload,
        isTableLoading: false
      };
    }

    case ActionTypes.GET_TABLES_FAIL: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Ошибка получения таблиц\n`],
        isTableLoading: false
      };
    }


    case ActionTypes.GET_TABLE_DATA_REQUEST: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Получение данных таблицы`],
        isTableLoading: true
      };
    }

    case ActionTypes.GET_TABLE_DATA_SUCCESS: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Данные таблицы получены успешно\n`],
        tableData: action.payload,
        isTableLoading: false
      };
    }

    case ActionTypes.GET_TABLE_DATA_FAIL: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Ошибка получения данных таблицы\n`],
        isTableLoading: false
      };
    }


    case ActionTypes.SAVE_TABLE_DATA_REQUEST: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Сохранение данных таблицы`],
        isTableLoading: true
      };
    }

    case ActionTypes.SAVE_TABLE_DATA_SUCCESS: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Данные таблицы успешно сохранены\n`],
        isTableLoading: false
      };
    }

    case ActionTypes.SAVE_TABLE_DATA_FAIL: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Ошибка сохранения данных таблицы\n`],
        isTableLoading: false
      };
    }


    case ActionTypes.EDIT_TABLE_DATA_REQUEST: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Редактирование данных таблицы`],
        isTableLoading: true
      };
    }

    case ActionTypes.EDIT_TABLE_DATA_SUCCESS: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Данные таблицы успешно отредактированы\n`],
        isTableLoading: false
      };
    }

    case ActionTypes.EDIT_TABLE_DATA_FAIL: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Ошибка редактирования данных таблицы\n`],
        isTableLoading: false
      };
    }


    case ActionTypes.GET_THE_MOST_VALUABLE_CUSTOMER_REQUEST: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Получение самого ценного покупателя`],
        isLoading: true
      };
    }

    case ActionTypes.GET_THE_MOST_VALUABLE_CUSTOMER_SUCCESS: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Самый ценный покупатель успешно получен\n`],
        valuableCustomer: action.payload,
        isLoading: false
      };
    }

    case ActionTypes.GET_THE_MOST_VALUABLE_CUSTOMER_FAIL: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Ошибка получения самого ценного покупателя\n`],
        isLoading: false
      };
    }


    case ActionTypes.GET_FIVE_THE_MOST_POPULAR_GOODS_REQUEST: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Получение списка самых популярных товаров`],
        isLoading: true
      };
    }

    case ActionTypes.GET_FIVE_THE_MOST_POPULAR_GOODS_SUCCESS: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Список самых популярных товаров успешно получен\n`],
        popularGoods: action.payload,
        isLoading: false
      };
    }

    case ActionTypes.GET_FIVE_THE_MOST_POPULAR_GOODS_FAIL: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Ошибка получения списка самых популярных товаров\n`],
        isLoading: false
      };
    }


    case ActionTypes.GET_THREE_THE_MOST_VALUABLE_PROVIDERS_REQUEST: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Получение списка самых ценных поставщиков`],
        isLoading: true
      };
    }

    case ActionTypes.GET_THREE_THE_MOST_VALUABLE_PROVIDERS_SUCCESS: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Список самых ценных поставщиков успешно получен\n`],
        valuableProviders: action.payload,
        isLoading: false
      };
    }

    case ActionTypes.GET_THREE_THE_MOST_VALUABLE_PROVIDERS_FAIL: {
      return { ...state, logs: [...state.logs, `${getTimeStamp()}: Ошибка получения списка самых ценных поставщиков\n`],
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