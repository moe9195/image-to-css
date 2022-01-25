import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "./components/footer.js";
import Main from "./components/main.js";
import Title from "./components/title.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={styles.container}>
        <Head>
          <title>Image to CSS</title>
          <meta name="image-to-css" content="Convert image to CSS" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Title styles={styles} />
        <Main styles={styles} />
        <Footer styles={styles} />
      </div>
    </ThemeProvider>
  );
};

export default Home;
