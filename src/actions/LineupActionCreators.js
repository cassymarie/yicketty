const API = "http://localhost:3000"

export const handleLineupChange = (position, player) => ({type: 'LINEUP_CHANGE', payload: {name: position, value: player}})

// export const submitLineupForm = (form) => ({type: 'SET_LINEUP', payload: form})

export const submitLineupForm = (form) => {
    debugger
    return (dispatch) => {
        fetch(`${API}/lineup_players`, {
            method: 'POST',
            headers: {
                'Authorization': localStorage.token
            },
            body: JSON.stringify(form)
        })
        .then(response => response.json())
        .then(response => {
            dispatch({ 
            type: 'SET_LINEUP', 
            payload: response.user.data.attributes
        })
    })
    }
}

