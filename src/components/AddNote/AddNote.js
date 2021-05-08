import axios from '../../axios';
import { useState } from 'react';
import './AddNote.css'
import {useStateValue} from '../../StateProvider'

const AddNote = () => {

	const [ { notes }, dispatch] = useStateValue();

	const [noteText, setNoteText] = useState('');
    const [noteTitle, setNoteTitle] = useState('');
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			
			axios.post('/note', {title: noteTitle, description: noteText})
			.then( res => {
				dispatch({
					type: "ADD_NOTE",
					noteData: res.data.data.note
				})
			})
			setNoteText('');
			setNoteTitle('');
		}
	};

	return (
		<div className='note new'>
            <input placeholder='Type to add title...'
				type="text" value={noteTitle}
                onChange={e => setNoteTitle(e.target.value)}
			/>
			<textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;