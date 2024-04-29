const Footer = () => {
  const currentDate = new Date();

  return (
    <footer className="Footer">
      <p> &copy; Emmanuel Chisom {currentDate.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
