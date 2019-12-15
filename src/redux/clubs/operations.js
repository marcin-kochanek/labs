async function fetchClubs() {
    const response = await fetch('https://api-football-v1.p.rapidapi.com/v2/teams/league/2', {
        headers: {
            'x-rapidapi-host': 'xxx',
	        'x-rapidapi-key': 'a124e7b064msha5ce2fd4cc42e0ep1cbf79jsn2966528939e6'
        }
    });
    return await response.json()
}

export const getAllClubs = () => async dispatch => {
    const clubs = await fetchClubs()
    console.log(clubs)
}