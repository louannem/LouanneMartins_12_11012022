export const fetchUSerData = () => {
   return fetch(`http://localhost:3000/user/18`)
    .then((response) => response.json()
    .then((user) => user.data )
    .catch((error) => console.log(error))
    )
}

export const fetchPerfData = () => {
    return fetch(`http://localhost:3000/user/12/performance`)
    .then((response) => response.json()
    .then((user) => user.data )
    .catch((error) => console.log(error))
    )
}