const Footer = () => {
  const handleMouseEnter = () =>{
    const cursor = document.querySelector('.cursor');
    cursor?.classList.add('cursor-active');

  }
const handleMouseLeave = () =>{
    const cursor = document.querySelector('.cursor');
    cursor?.classList.remove('cursor-active');
  }
  return (
    <>
      <div className="w-full py-7  md:flex text-center justify-between h-auto border-b-[1px] border-b-black footer-transform  responsiv-footer">
        <div className="md:flex ">
          <ul className="flex text-center justify-center">
            <li className="me-3 hover:text-[#00ff00] p-1 hover-this" 
            onMouseEnter={()=>{
              handleMouseEnter();
            }}
            onMouseLeave={()=>{
              handleMouseLeave();
            }}
            >
            <div data-sticky="4" className="sticky_w cursor-pointer">
              <div className="button_text sticky_t">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/aakash-ramani-541321235/"
              >Linkedin
              </a>
              </div>
            </div>
            </li>
            <li className="me-3 hover:text-[#00ff00] p-1" 
            onMouseEnter={()=>{
              handleMouseEnter();
            }}
            onMouseLeave={()=>{
              handleMouseLeave();
            }}
            >
            <div data-sticky="4" className="sticky_w cursor-pointer">
            <div className="button_text sticky_t">
              <a
                target="_blank"
                className="pb-4 sticky_w"
                href="https://github.com/AksRamani"
                data-sticky="4"
              >
                <span className="button_text sticky_t">Github</span>
              </a>
              </div>
              </div>
            </li>
            <li className="me-3 hover:text-[#00ff00] p-1" 
            onMouseEnter={()=>{
              handleMouseEnter();
            }}
            onMouseLeave={()=>{
              handleMouseLeave();
            }}
            >
            <div data-sticky="4" className="sticky_w cursor-pointer">
            <div className="button_text sticky_t">
              <a
                target="_blank"
                className="pb-4 sticky_w"
                href="https://www.facebook.com/aakash.ramani.112?mibextid=ZbWKwL"
                data-sticky="4"
              >
                <span className="button_text sticky_t">Facebook</span>
              </a>
              </div>
              </div>
            </li>
            <li className="me-3 hover:text-[#00ff00] p-1" 
            onMouseEnter={()=>{
              handleMouseEnter();
            }}
            onMouseLeave={()=>{
              handleMouseLeave();
            }}
            >
            <div data-sticky="4" className="sticky_w cursor-pointer">
            <div className="button_text sticky_t">
              <a
                target="_blank"
                className="pb-4  sticky_w"
                href="https://www.instagram.com/aks_ramani/"
                data-sticky="4"
              >
                <span className="button_text sticky_t">Instagram</span>
              </a>
              </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-4 md:mt-0">
          <h5>
            2024 © Made with<span className="text-red-600 px-2 ">♥</span>by
            Aakash
          </h5>
        </div>
      </div>
    </>
  );
};

export default Footer;
