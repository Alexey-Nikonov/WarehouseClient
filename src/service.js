const Service = (() => {
  const _serverAddress = 'http://10.17.34.50:3000/api';

  function _login(login, password) {
    return new Promise((resolve, reject) => {
      const data = JSON.stringify({
        username: login,
        password
      });

      fetch(`${_serverAddress}/account/login`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: data
      })
      .then(r => r.json())
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
    })
  }

  function _register(login, password, confirmpassword) {
    return new Promise((resolve, reject) => {
      const data = JSON.stringify({
        username: login,
        password,
        confirmpassword
      });

      fetch(`${_serverAddress}/account/register`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: data
      })
      .then(r => r.json())
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
    })
  }

  function _getTables(token) {
    return new Promise((resolve, reject) => {
      fetch(`${_serverAddress}/tables`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })
      .then(r => r.json())
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
    })
  }

  function _getTableData(token, route) {
    return new Promise((resolve, reject) => {
      fetch(`${_serverAddress}/${route}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })
      .then(r => r.json())
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
    })
  }

  function _saveTableData(token, route, data) {
    return new Promise((resolve, reject) => {
      fetch(`${_serverAddress}/${route}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data)
      })
      .then(r => r.json())
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
    })
  }

  function _editTableData(token, route, data, id) {
    return new Promise((resolve, reject) => {
      fetch(`${_serverAddress}/${route}/${id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data)
      })
      .then(r => r.json())
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
    })
  }

  function _deleteTableData(token, route, id) {
    return new Promise((resolve, reject) => {
      fetch(`${_serverAddress}/${route}/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })
      .then(r => r.json())
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
    })
  }

  function _getTheMostValuableCustomer(token) {
    return new Promise((resolve, reject) => {
      fetch(`${_serverAddress}/clients/GetTheMostValuableCustomer`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })
      .then(r => r.json())
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
    })
  }

  function _getFiveTheMostPopularGoods(token) {
    return new Promise((resolve, reject) => {
      fetch(`${_serverAddress}/goods/GetFiveTheMostPopularGoods`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })
      .then(r => r.json())
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
    })
  }

  function _getThreeTheMostValuableProviders(token) {
    return new Promise((resolve, reject) => {
      fetch(`${_serverAddress}/providers/GetThreeTheMostValuableProviders`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })
      .then(r => r.json())
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
    })
  }

  return {
    login: _login,
    register: _register,
    getTables: _getTables,
    getTableData: _getTableData,
    saveTableData: _saveTableData,
    editTableData: _editTableData,
    deleteTableData: _deleteTableData,
    getTheMostValuableCustomer: _getTheMostValuableCustomer,
    getFiveTheMostPopularGoods: _getFiveTheMostPopularGoods,
    getThreeTheMostValuableProviders: _getThreeTheMostValuableProviders
  }
})();

export default Service;