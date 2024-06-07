export const sortTicket = (tickets, preference) => {
	switch (preference) {
		case 'low to high':
			return [...tickets].sort((a, b) => a.priority.localeCompare(b.priority));
		case 'hight to low':
			return [...tickets].sort((a, b) => b.priority.localeCompare(a.priority));
		default:
			return tickets;
	}
};
