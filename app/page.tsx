import Projects from 'components/portfolio/Projects';
import Hero from 'components/portfolio/Hero';
import Experience from 'components/portfolio/Experience';
import Stack from 'components/portfolio/Stack';

export default function Portfolio() {
	return (
		<div className="space-y-8">
			<Hero />
			<Projects />
			<Experience />
			<Stack />
		</div>
	);
}
