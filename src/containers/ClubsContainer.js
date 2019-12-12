import React from 'react'
import { connect } from 'react-redux'

const ClubsContainer = ({ clubs }) => (
    <ul>
        {clubs.list.map(club => (
            <li>{club}</li>
        ))}
    </ul>
)

export default connect(
    state => ({
        clubs: state.clubs
    }),
    {}
)(ClubsContainer);
