const username = 'Jesus';

const getUser = () => ({ uid: 'ABC123', username: username })
const getActiveUser = (name) => ({ uid: 'ABC123', username: name })

export { getUser, getActiveUser, username }