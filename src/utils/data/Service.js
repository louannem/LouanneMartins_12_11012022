/**
 * Service to fetch API's datas
 * @param {number} id user's id, used in state (18 by default can be switched)
 * @param {string} path the API path to get a specific set of datas needed by the charts 
 * @returns array of datas
 */
export const fetchData = (id, path) => {
    return fetch(`http://localhost:3000/user/`+id+path)
    .then((response) => response.json()
    .then((user) => user.data )
    .catch((error) => console.log(error))
    )
}

export const fetchUser = (id, path) => {
    return fetch(`http://localhost:3000/user/`+id+path)
    .then((response) => response.json()
    .catch((error) => console.log(error))
    )
    
}
