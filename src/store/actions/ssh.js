export const addKey = (dispatch) => (key) =>{
    return dispatch({
        type:'SSH_ADD_KEY',
        payload:key,
    })
}

export default () => ({
        type:'DEFAULT',
        payload: null,
})

