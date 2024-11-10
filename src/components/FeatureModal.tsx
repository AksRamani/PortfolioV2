import { useEffect } from "react";

interface Props {
    title: string;
    des: string;
    setShowModal: any;
    showModal : boolean;
    icon: React.ReactNode;
  }
export default function FeatureModal({ title, des, icon, showModal, setShowModal }: Props) {
    useEffect(() => {
        document.body.classList.add("overflow-hidden");
    })

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
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#000000d4] "
          >
            <div className="relative w-auto my-6 md:max-w-3xl bg-black border bg-gradient-to-r rounded-lg sm:max-w-sm mx-5 responsive-menu">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-3xl font-semibold flex content-center">
                  <span className="text-5xl text-designColor pr-7">{icon}</span>
                  <span className="text-white"> {title}</span>
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-[#00ff00] float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onMouseEnter={()=>{
                      handleMouseEnter();
                    }}
                    onMouseLeave={()=>{
                      handleMouseLeave();
                    }}
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-[#00ff00] h-6 w-6 block outline-none focus:outline-none text-4xl">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                   {des}
                  </p>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}