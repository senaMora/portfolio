export default function ProjectCard({ title, desc, link }) {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{desc}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">View</a>
        </div>
    )
}
