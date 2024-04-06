

const Footer = () => {
  return (
    <>
    <div className="w-full py-7  md:flex text-center justify-between h-auto border-b-[1px] border-b-black footer-transform  responsiv-footer">
      <div className="md:flex ">
        <ul className="flex text-center justify-center">
          <li className="me-3"><a href="https://www.linkedin.com/in/aakash-ramani-541321235/"> LINKEDIN</a></li>
        <li className="me-3"> <a href="https://github.com/AksRamani">GITHUB</a></li>
          <li className="me-3"> <a href="https://www.facebook.com/aakash.ramani.112?mibextid=ZbWKwL">Facebook</a></li>
          <li className="me-3"> <a href="https://www.instagram.com/aks_ramani/"> INSTAGRAM</a></li>
        </ul>
          </div>
      <div className="mt-4 md:mt-0">
        <h5>2024 © Made with<span className="text-red-800 px-2 ">♥</span>by Aakash</h5>
      </div>
      </div>
      </>
  );
};

export default Footer;
