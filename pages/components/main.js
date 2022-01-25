import React, { useState } from "react";
import UploadImage from "./upload_image.js";
import Output from "./output.js";
import styles from "../../styles/Home.module.css";

const Main = () => {
  const [image, setImage] = useState(null);
  const [css, setCSS] = useState("");
  const [inlineStyle, setInlineStyle] = useState({});
  const [loading, setLoading] = useState(false);

  return (
    <main className={styles.main}>
      <UploadImage
        styles={styles}
        loading={loading}
        setLoading={setLoading}
        image={image}
        setImage={setImage}
        css={css}
        setCSS={setCSS}
        inlineStyle={inlineStyle}
        setInlineStyle={setInlineStyle}
      />
      <Output styles={styles} inlineStyle={inlineStyle} css={css} />
    </main>
  );
};

export default Main;
