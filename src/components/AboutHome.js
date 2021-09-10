import React from 'react'
import { Link } from 'react-router-dom'
const AboutHome = () => {
    return (
        <>
                    <div className="section-bg style-1" style={{backgroundImage: 'url("images/bg_1.jpg")'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <h2 className="section-title-underline style-2">
                  <span>About Our University</span>
                </h2>
              </div>
              <div className="col-lg-8">
                <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem nesciunt quaerat ad reiciendis perferendis voluptate fugiat sunt fuga error totam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus assumenda omnis tempora ullam alias amet eveniet voluptas, incidunt quasi aut officiis porro ad, expedita saepe necessitatibus rem debitis architecto dolore? Nam omnis sapiente placeat blanditiis voluptas dignissimos, itaque fugit Link laudantium adipisci dolorem enim ipsum cum molestias? Quod quae molestias modi fugiat quisquam. Eligendi recusandae officiis debitis quas beatae aliquam?</p>
                <p className="green-link"><Link to="#">Read more</Link></p>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default AboutHome
