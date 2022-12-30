import { useEffect, useState } from "react";

import * as Styles from "./styles";

const ScrollToTop = () => {
  const [makeACtive, setMakeActive] = useState(false);

  const handleCroll = () => {
    const scrolled = window
      ? window.pageYOffset
      : document.documentElement.scrollTop;

    if (scrolled > 300) {
      setMakeActive(true);
    } else if (scrolled <= 300) {
      setMakeActive(false);
    }
  };

  console.log({ makeACtive });

  useEffect(() => {
    window.addEventListener("scroll", handleCroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleCroll);
    };
  }, []);

  const backToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Styles.Container onClick={backToTop} active={makeACtive} title="top">
      <Styles.Wrapper>
        <Styles.Trangletop />
        <Styles.Tranglebottom />
      </Styles.Wrapper>
    </Styles.Container>
  );
};

export default ScrollToTop;
