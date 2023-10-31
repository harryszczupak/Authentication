import EventForm from '../components/EventForm';
import { useRouteLoaderData } from 'react-router-dom';
function NewEventPage() {

 
	return <EventForm method='post' />;
}

export default NewEventPage;
