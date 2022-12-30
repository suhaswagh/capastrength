import React from 'react'

import * as Styles from './styles'

const ServicesCard = ({ item }) => {
    return (
        <Styles.Container>
            <Styles.ImageWrapper className='image'>
                <Styles.IconHolder
                    src={item.icon}
                />
            </Styles.ImageWrapper>
            <Styles.TextHolder className='text'>
                {item.name}
            </Styles.TextHolder>
        </Styles.Container>
    )
}

export default ServicesCard