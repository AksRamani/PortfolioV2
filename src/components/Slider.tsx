import "../style/marquee.css" 

const Slider = () => {
  return (
    <div>
        <div className="marquee_container">
  <div className="blobs">
    <div className="blob1"></div>
    <div className="blob2"></div>
  </div>
  <div className="marquee">
    <div className="marquee_group">
      <span>Aakash</span>
      <span>Ramani</span>
      <span>Aakash</span>
      <span>Ramani</span>
      <span>Aakash</span>
      <span>Ramani</span>
      {/* <span>Web Developer</span> */}
    </div>
    <div className="marquee_group">
      <span>Aakash</span>
      <span>Ramani</span>
      <span>Aakash</span>
      <span>Ramani</span>
      <span>Aakash</span>
      <span>Ramani</span>
      {/* <span>Web Developer</span> */}
    </div>
  </div>
</div>
    </div>
  )
}

export default Slider