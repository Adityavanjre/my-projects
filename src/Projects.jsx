import { useFetchProjects } from './fetchProjects'

const Projects = () => {
  const { loading, project } = useFetchProjects()

  if (loading) {
    return (
      <section className="projects">
        <h1>Loading...</h1>
      </section>
    )
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {project.map((proj) => {
          const { id, url, title, img } = proj
          return (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="project"
            >
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          )
        })}
      </div>
    </section>
  )
}
export default Projects
