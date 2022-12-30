import React from 'react'

import Seaction from '../../components/global/seaction'

import SeactionHeading from '../../components/global/seaction-title'

import { ProjectData } from '../../components/projects/projectData'

import ProjectCard from '../../components/projects/card';
import Projects from '../../components/projects';

import * as Styles from './styles'

const ProjectPage = () => {
    return (
        <div className="container">
            <Seaction>
                <SeactionHeading title="Explore New features" />
                <Styles.CardGrid className="grid-md-none">
                    {
                        ProjectData.map((item, key) => {
                            return (
                                <ProjectCard
                                    key={key}
                                    item={item}
                                />
                            )
                        })
                    }
                </Styles.CardGrid>
            </Seaction>
            {/* <Seaction>
                <Styles.VideoContainer>
                    <SeactionHeading title="Short Glimpse Of the Working" />
                    <iframe width="100%" height="615" src="https://www.youtube.com/embed/KbTjl1PNCzg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Styles.VideoContainer>
            </Seaction> */}
        </div>
    )
}

export default ProjectPage