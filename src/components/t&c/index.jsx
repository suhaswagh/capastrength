import React from 'react'

import { Link } from 'react-router-dom';

import * as Styles from './styles'

const TandC = () => {
    return (
        <Styles.Container className="px-md-5">
            <Styles.TitleHolder>
                last updated : May 20,2021
            </Styles.TitleHolder>
            <Styles.ListHolder>
                <Styles.ListItem>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare ut suscipit convallis est mauris risus consequat. Quis eget tristique elit, gravida duis ut. Erat venenatis rhoncus, imperdiet tincidunt turpis suspendisse arcu integer nec. Lacinia porta blandit ut tellus nunc. Neque elit neque commodo est nec posuere. Eu arcu accumsan tristique bibendum ut dictum parturient libero, quis. Gravida ac quis leo lorem turpis tempor donec nulla. Praesent quam ut gravida integer dignissim sit montes, mi.
                </Styles.ListItem>
                <Styles.ListItem>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare ut suscipit convallis est mauris risus consequat. Quis eget tristique elit, gravida duis ut. Erat venenatis rhoncus, imperdiet tincidunt turpis suspendisse arcu integer nec. Lacinia porta blandit ut tellus nunc. Neque elit neque commodo est nec posuere. Eu arcu accumsan tristique bibendum ut dictum parturient libero, quis. Gravida ac quis leo lorem turpis tempor donec nulla. Praesent quam ut gravida integer dignissim sit montes, mi.
                </Styles.ListItem>
                <Styles.ListItem>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare ut suscipit convallis est mauris risus consequat. Quis eget tristique elit, gravida duis ut. Erat venenatis rhoncus, imperdiet tincidunt turpis suspendisse arcu integer nec. Lacinia porta blandit ut tellus nunc. Neque elit neque commodo est nec posuere. Eu arcu accumsan tristique bibendum ut dictum parturient libero, quis. Gravida ac quis leo lorem turpis tempor donec nulla. Praesent quam ut gravida integer dignissim sit montes, mi.
                </Styles.ListItem>
                <Styles.ListItem>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare ut suscipit convallis est mauris risus consequat. Quis eget tristique elit, gravida duis ut. Erat venenatis rhoncus, imperdiet tincidunt turpis suspendisse arcu integer nec. Lacinia porta blandit ut tellus nunc. Neque elit neque commodo est nec posuere. Eu arcu accumsan tristique bibendum ut dictum parturient libero, quis. Gravida ac quis leo lorem turpis tempor donec nulla. Praesent quam ut gravida integer dignissim sit montes, mi.
                </Styles.ListItem>
            </Styles.ListHolder>
            <Styles.Button>
                <Link to="/">
                    Go to Main Page
                </Link>
            </Styles.Button>
        </Styles.Container>
    )
}

export default TandC