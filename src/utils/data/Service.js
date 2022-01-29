/**
 * Service to fetch API's datas 
 * @param {number} id user's id, used in state (18 by default can be switched)
 * @param {string} path the API path to get a specific set of datas needed by the charts 
 * @returns json data
 */
export const fetchUser = (id, path) => {
    return fetch(`http://localhost:3000/user/`+id+path)
    .then((response) => response.json()
    )
    
}
