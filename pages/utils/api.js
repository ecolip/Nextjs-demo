const api = {
  hostname: 'https://randomuser.me/api/?results=5',
  getUsers() {
    console.log('123');
    return fetch(`${this.hostname}`)
      .then((response) => response.json());
  },
};

export default api;