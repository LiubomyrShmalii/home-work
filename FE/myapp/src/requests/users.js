export const getUsers = set_state => {
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => set_state(json))
}