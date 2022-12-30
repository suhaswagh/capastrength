import React from 'react'

import { AssetsList } from '../../elements/assetsList';

import * as Styles from './styles'

const Loading = () => {
    return (
        <Styles.Container>
            <Styles.ImageContainer>
                <Styles.ImageHolder
                    src={AssetsList.logo.LogoSvg}
                />
            </Styles.ImageContainer>
        </Styles.Container>
    )
}

export default Loading