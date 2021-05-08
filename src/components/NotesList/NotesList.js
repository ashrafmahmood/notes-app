import Note from '../Note/Note';
import AddNote from '../AddNote/AddNote';
import './NotesList.css'

const NotesList = ({ notes }) => {
	return (
		<div className='notes-list'>
			<AddNote />
			{notes.map((note) => (
				<Note
					key={note.id}
					id={note.id}
					title={note.title}
					text={note.description}
					date={note.created_at}
				/>
			))}
		</div>
	);
};

export default NotesList;