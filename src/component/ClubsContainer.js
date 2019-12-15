import React from 'react'
import ClubsForm from './ClubsForm'
import { useSelector } from 'react-redux'

const ClubsContainer = () => {
    const clubs = useSelector(state => state.clubs);

    return (
        <>
            <ul>
                {clubs.list.map(club => (
                    <li>{club}</li>
                ))}
            </ul>
            <ClubsForm />
        </>
    )
}

export default ClubsContainer;
