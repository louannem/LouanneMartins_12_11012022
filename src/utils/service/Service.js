export const fetchUSerData = () => {
   return fetch(`http://localhost:3000/user/18`)
    .then((response) => response.json()
    .then((user) => user.data )
    .catch((error) => console.log(error))
    )
}

export const fetchPerfData = () => {
    return fetch(`http://localhost:3000/user/18/performance`)
    .then((response) => response.json()
    .then((user) => user.data )
    .catch((error) => console.log(error))
    )
}

export const fetchSessionData = () => {
    return fetch(`http://localhost:3000/user/18/average-sessions`)
    .then((response) => response.json()
    .then((user) => user.data )
    .catch((error) => console.log(error))
    )
}

export const fetchActivityData = () => {
    return fetch(`http://localhost:3000/user/18/activity`)
    .then((response) => response.json()
    .then((user) => user.data )
    .catch((error) => console.log(error))
    )
}