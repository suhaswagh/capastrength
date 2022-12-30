import React from 'react'

import ProjectCard from '../card'

import { ProjectData } from '../projectData'

import * as Styles from './styles'

const ProjectList = () => {
    return (
        <Styles.Container className="flex-wrap flex-md-nowrap">
            {
                ProjectData.slice(0, 4).map((item, key) => {
                    return (
                        <ProjectCard
                            key={key}
                            item={item}
                        />
                    )
                })
            }
        </Styles.Container>
    )
}

export default ProjectList