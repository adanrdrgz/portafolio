import { projects } from '../data/projects'

class ProjectService {
    projects = projects
    
    getProjects() {
        try {
            return projects
        } catch(e) {
            console.log(e)
        }
    }
}

export const projectService = new ProjectService()