import React, {useRef} from 'react'
import clubsActions from '../redux/clubs/actions';

const ClubsForm = () => {
    const clubAddInput = useRef(null);
    const clubRemoveInput = useRef(null);
    const add = event  => {
        event.preventDefault();
        clubsActions.add(clubAddInput.current.value);
        clubAddInput.current.value = '';
    }
    const remove = event  => {
        event.preventDefault();
        clubsActions.remove(clubRemoveInput.current.value);
        clubRemoveInput.current.value = '';
    }

    return (
        <>
            <form onSubmit={add}>
                <input ref={clubAddInput} />
                <button type="submit">add club</button>
            </form>
            <form onSubmit={remove}>
                <input ref={clubRemoveInput} />
                <button type="submit">remove club</button>
            </form>
        </>
    )
}


export default ClubsForm
