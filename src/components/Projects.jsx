import projects from "../json/projects.json"
import { ProjectsContainer, ProjectCard, ProjectImage, ProjectLink, ProjectDescription, ProjectLinkContainer } from "../styledcomponents/Projects"

export default function Projects(){
    return <ProjectsContainer>
        {
            projects.map((project) => (
                <ProjectCard key={project.name}>
                    <h3 style={{paddingBottom:"10px"}}>{project.name}</h3>
                    <ProjectImage src={project.image} />
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <ProjectLinkContainer>
                    <ProjectLink href={project.github} target="_blank">Github</ProjectLink>
                    <ProjectLink href={project.live} target="_blank">Live Site</ProjectLink>
                    </ProjectLinkContainer>
                </ProjectCard>
            ))
        }
    </ProjectsContainer>
}