import Header from './components/Header';
import Card from './components/Card';

const people = [
	'Eric Nogelmeier',
	'Hasnain Jaffery',
	'Ika Lam',
	'Isabel Chua',
	'Jack Edmondson',
	'James Howells',
	'John',
	'Kaini Chang',
	'Maksim Kramer',
	'Marvin Trujillo',
	'Raffay Syed',
	'Umar Kantaev',
	'Kaedar Hargude',
	'Václav Šrajer',
	'Oren Tal',
	'Marvin Truj',
	'Kin Kounoudji',
	'Khaled Ben Yahya',
	'js',
	'John',
	'Ika Lam',
	'Gabriel Luis',
	'Echo',
	'Dusan Mitic',
	'Anton Sydorenko',
	'Anthony',
];

export default function App() {
	const cards = people.map((person) => <Card name={person} />);

	return (
		<div className="container">
			<Header />
			<div className="rows">{cards}</div>
		</div>
	);
}
