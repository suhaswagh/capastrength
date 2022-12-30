import * as Styles from './veriables'
import PageDimensions from './pageDimensions';
import { media } from './mediaQuery';

const GetTheme = () => {

  const { width, height, videoPerRow } = PageDimensions();

  const theme = {
    color: Styles.color,
    element: Styles.element,
    font: Styles.font,
    media,
    screen: {
      width,
      height,
    },
    videoPerRow
  };

  return theme;
};

export default GetTheme;
