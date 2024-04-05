import "../style/marquee.css"

const Slider = () => {
  return (
    <section className="w-full py-20">
      <div className="relative">
        <div className="absolute right-0 top-14">
          <div className="marquee">
          <div className="marquee__wrapper marquee__wrapper--a">
         <div className="font">"Code with heart, shine with Tailwind"
         </div>
         <div className="font">"Let's sculpt wonders with React JS" 
         </div>
         <div className="font">Transforming visions into interactive marvels</div>
      </div>
      <div className="marquee__wrapper marquee__wrapper--b" aria-hidden="true">
         <div className="font">"Code with heart, shine with Tailwind"
         </div>
         <div className="font">"Let's sculpt wonders with React JS"
         </div>
         <div className="font">Transforming visions into interactive marvels</div>
      </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider