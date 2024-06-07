import './App.css';
import './styles.css';
import { useReducer } from 'react';
import TicketForm from './components/TicketForm';
import ticketReducer from './reducers/ticketReducer';
import TicketList from './components/TicketList';
import { sortTicket } from './utilities/sortingUtilisties';

function App() {
	const initialState = { tickets: [], editingTicket: null, sortPreference: 'hight to low' };

	const [state, dispatch] = useReducer(ticketReducer, initialState);

	const sortedTickets = sortTicket(state.tickets, state.sortPreference);

	return (
		<div className='App'>
			<div className='container'>
				<h1>Bug Blaster</h1>
				<TicketForm dispatch={dispatch} editingTicket={state.editingTicket} />
				{state.tickets.length > 0 && (
					<div className='result'>
						<h2>All Tickets</h2>
						<select value={state.sortPreference} onChange={(e) => dispatch({ type: 'SET_SORTING', payload: e.target.value })}>
							<option value='hight to low'>High to Low</option>
							<option value='low to high'>Low to High</option>
						</select>

						<TicketList tickets={sortedTickets} dispatch={dispatch} />
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
