

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white p-4" style={{position:"sticky"}}>
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} Your Website Name. All rights reserved.</p>
   
      </div>
    </footer>
  );
};

export default Footer;
