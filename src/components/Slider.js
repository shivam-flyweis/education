import React from 'react'

const Slider = () => {
  return (
    <>
<div className="container-fluid p-0">
  <div className="row">
    <div className="col-12">
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" style={{width:"100%",height:"23rem"}} src="images/hero_1.jpg" alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" style={{width:"100%",height:"23rem"}} src="images/hero_1.jpg" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" style={{width:"100%",height:"23rem"}} src="images/hero_1.jpg" alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>
    </div>
  </div>
</div>

    </>
  );
}

export default Slider
