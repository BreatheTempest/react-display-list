export default function Card({ name }) {
	return (
		<section className="card">
			<img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
			<p className="name">{name}</p>
		</section>
	);
}
