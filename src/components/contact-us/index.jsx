import React from 'react'

import { AssetsList } from '../../components/elements/assetsList';

import ContactForm from './form';

import * as Styles from './styles'

const ContactUs = () => {
    return (
        <Styles.Contaier className="flex-wrap flex-md-nowrap">
            <Styles.ImageWrapper className="col col-12 col-md p-5 ">
                <Styles.ImageHolder
                    src={AssetsList.client}
                />
            </Styles.ImageWrapper>
            <Styles.FormWrapper className="col col-12 col-md px-5 py-1 py-md-5">
                <ContactForm />
            </Styles.FormWrapper>
        </Styles.Contaier>
    )
}

export default ContactUs