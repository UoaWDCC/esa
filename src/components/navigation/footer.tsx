function Footer() {
    const styles = {
      container: "bg-[#141212] text-green-500 px-6 py-10 border-t border-gray-700",
      inner: "max-w-7xl mx-auto",
      text: "text-lg",
    };
  
    return (
      <footer className={styles.container}>
        <div className={styles.inner}>
          <p className={styles.text}>This should be green!</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  