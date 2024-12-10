import { useEffect, useState } from "react";

interface Program {
	id: number;
	title: string;
	poster: string;
	synopsis: string;
	country: string;
	year: number;
}

export default function Programs() {
	const [programs, setPrograms] = useState<Program[]>([]);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}/api/programs`)
			.then((response) => response.json())
			.then((data) => setPrograms(data))
			.catch((error) => console.error("Error fetching programs :", error));
	}, []);

	return (
		<>
			<h2>Programs</h2>
			<section>
				{programs.map((program) => (
					<div key={program.id}>
						<h3>{program.title}</h3>
						<img src={program.poster} alt={program.title} />
						<p>Synopsis : {program.synopsis}</p>
						<p>Pays : {program.country}</p>
						<p>Année : {program.year}</p>
					</div>
				))}
			</section>
		</>
	);
}
