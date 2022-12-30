import React from 'react'

import * as Styles from './styles'

const InputField = () => {
    return (
        <Styles.Container>
            <Styles.InputWrapper>
                <Styles.InputHolder
                    name="signup"
                    placeholder="Enter Email"
                />
                <Styles.Button>
                    Send
                </Styles.Button>
            </Styles.InputWrapper>
        </Styles.Container>
    )
}

export default InputField