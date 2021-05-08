import axios from '../../axios';
import { MdDeleteForever } from 'react-icons/md';
import { useStateValue } from '../../StateProvider';
import './Note.css';

const Note = ({ id, title, text, date}) => {

	const [ { notes }, dispatch] = useStateValue();

	const d = new Date(date);
	const dateString =   d.getHours() + ':' + d.getMinutes()  + ', ' + d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
	const handleDeleteNote = () => {
		axios.delete(`note/${id}`).then(
			dispatch({
				type: 'DELETE_NOTE',
				id: id
			})
		)
	}

	return (
		<div className='note'>
			<div>
				<h5>{title}</h5>
				<span>{text}</span>
			</div>
			<div className='note-footer'>
				<small>{dateString}</small>
				<MdDeleteForever
					onClick={handleDeleteNote}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;