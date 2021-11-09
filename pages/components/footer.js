const Footer = ({ styles }) => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/moe9195"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <span className={styles.logo}>Image</span>
      </a>
    </footer>
  );
};

export default Footer;
