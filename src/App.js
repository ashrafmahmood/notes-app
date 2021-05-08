import { useState, useEffect } from 'react';
import NotesList from './components/NotesList/NotesList';
import Search from './components/Search/Search';
import Header from './components/Header/Header';
import './App.js'
import axios from './axios';
import { useStateValue } from './StateProvider';

const App = () => {

	const [ { notes }, dispatch] = useStateValue();

	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		
		axios.get('/notes').then( res => {
			dispatch({
				type: 'GET_ALL_NOTES',
				allNote: res.data.data.notes
			})
		})
	}, []);

	return (
		<div >
			<div className='container'>
				<Header />
				<Search handleSearchNote={setSearchText} />
				{notes ? (<NotesList
					notes={notes.filter((note) =>
						note.title.toLowerCase().includes(searchText)
					)}
				/>) : null}
			</div>
		</div>
	);
};

export default App;
