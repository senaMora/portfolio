import ProjectCard from '../components/ProjectCard'

export default function Projects() {
    const projects = [
        { title: 'Portfolio Website', desc: 'Built using React + Vite', link: '#' },
        { title: 'Weather App', desc: 'Built with OpenWeather API', link: '#' },
    ]

    return (
        <section>
            <h2>Projects</h2>
            {projects.map((project, i) => (
                <ProjectCard key={i} {...project} />
            ))}
        </section>
    )
}
