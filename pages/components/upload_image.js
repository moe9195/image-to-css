import React, { useEffect, useRef } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import styles from "../../styles/Home.module.css";

const getColorIndicesForCoord = (x, y, imgData) => {
  const data = imgData.data;
  const width = imgData.width;
  const red = y * (width * 4) + x * 4;
  return [data[red], data[red + 1], data[red + 2], data[red + 3]];
};

const rgbToHex = (rgb) =>
  "#" +
  ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);

const imgDataToCSS = (imgData) => {
  let shadowStyle = "";
  let photoCSS = `.drawing {
    width: 0;
    height: 0;
    box-shadow:\n`;

  for (let i = 0; i < imgData.height - 1; i++) {
    for (let j = 0; j < imgData.width - 1; j++) {
      let rgb = getColorIndicesForCoord(j, i, imgData);
      let hex = rgbToHex(rgb);
      let shadow = `${3 * j}px ${3 * i}px ${4}px ${3}px ${hex}`;
      shadowStyle += `${shadow}, `;
      photoCSS += `    ${shadow},\n`;
    }
  }

  let photoStyle = {
    boxShadow: shadowStyle.slice(0, -2),
  };

  return [photoStyle, photoCSS.slice(0, -2) + ";\n}"];
};

const UploadImage = ({
  image,
  setImage,
  setInlineStyle,
  setCSS,
  css,
  loading,
  setLoading,
}) => {
  const isInitialMount = useRef(true);
  const canvas = useRef();
  const maxWidth = 240;

  const handleUpload = (e) => {
    setLoading(true);
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (image) {
        let imgObject = new Image();
        imgObject.src = URL.createObjectURL(image);
        imgObject.onload = function () {
          let ctx = canvas.current.getContext("2d");

          let height = imgObject.height / (imgObject.width / maxWidth);
          let width = maxWidth;

          ctx.canvas.width = width;
          ctx.canvas.height = height;

          ctx.drawImage(imgObject, 0, 0, width, height);
          let imgData = ctx.getImageData(0, 0, width, height);

          let [style, css] = imgDataToCSS(imgData);

          setCSS(css);
          setInlineStyle(style);
          setLoading(false);
          imgObject = null;
        };
      }
    }
  }, [image]);

  return (
    <div className={styles.description}>
      <label htmlFor="button-file">
        <input
          className={styles.hidden}
          accept="image/*"
          id="button-file"
          type="file"
          onChange={(e) => handleUpload(e)}
        />
        <LoadingButton
          style={{ fontSize: "24px" }}
          size="lg"
          color="inherit"
          loadingPosition="end"
          variant="text"
          endIcon={<PhotoCamera fontSize="large" />}
          loading={loading}
          aria-label="upload picture"
          component="span"
        >
          {loading ? "Generating..." : css ? "Upload another image" : "Get started by uploading an image"}
        </LoadingButton>
      </label>

      {image && (
        <img
          id="uploadedImage"
          src={URL.createObjectURL(image)}
          className={styles.hidden}
        />
      )}

      <canvas ref={canvas} className={styles.hidden} />
    </div>
  );
};

export default UploadImage;
