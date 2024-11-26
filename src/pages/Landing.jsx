import React from 'react'
import { Link } from 'react-router-dom'
import Landingimage from '../assets/Landingimage.gif'
import { Card } from 'react-bootstrap'
import manage from '../assets/manage.webp'
import category from '../assets/category.png'
import history from '../assets/history.png'




function Landing() {
  return (
   <>
      {/* landing sction */}
      <div className='container landingsection'>
        <div className='row align-items-center my-5'>
          <div className='col-lg-5'>
            <h3>Welcome to <span className='text-warning'>MediaPlayer</span></h3>
            <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit architecto consectetur, enim quo voluptas voluptatem quas amet iure commodi molestiae autem esse corrupti quidem est dolor velit ut officia.z</p>
            <Link to={'/home'} className='btn btn-info mt-4'>get Started</Link>
  
          </div>
          <div className='col'></div>
          <div className='col-lg-6'>
            <img src={Landingimage} alt="" />
          </div>
  
        </div>

        {/* features */}
  
        <div className='feature container my-5'>
  
          <h2 className='text-center text-warning'>Features</h2>
          <div className='row mt-5'>
            <div className='col-lg-4'>
  
                  {/* card1 */}
              <Card style={{ width: '18rem' }} className='p-3'>
                <Card.Img variant="top" src={manage}/>
                <Card.Body>
                  <Card.Title>Categorize Videos</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
  
            </div>
  
            <div className='col-lg-4'>
  
                  {/* card2 */}
              <Card style={{ width: '18rem' }} className='p-3'>
                <Card.Img variant="top" src={category}/>
                <Card.Body>
                  <Card.Title>managing History</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
  
            </div>
  
            <div className='col-lg-4'>
  
                  {/* card1 */}
              <Card style={{ width: '18rem' }} className='p-3'>
                <Card.Img variant="top" src={history}/>
                <Card.Body>
                  <Card.Title>manage Videos</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
  
            </div>

            {/* landing footer */}

            <div className='container my-5 p-5 border border-white border-3 rounded'>
              <div className='row'>
                <div className="col-lg-6">
                  <h3 className='text-warning'>Simple,Fast and Powerfull</h3>

                  <div className='mt-5 text-white'>
                    <p><span className='fs-5 fw-bold'>Play Everything:</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, laudantium asperiores nobis non praesentium, necessitatibus in iste sunt neque eligendi sit corporis ipsum vero. Eveniet perspiciatis iusto deleniti quod adipisci</p>
                  </div>

                  <div className='mt-5 text-white'>
                    <p><span className='fs-5 fw-bold'>Manage Videos:</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, laudantium asperiores nobis non praesentium, necessitatibus in iste sunt neque eligendi sit corporis ipsum vero. Eveniet perspiciatis iusto deleniti quod adipisci</p>
                  </div>

                  <div className='mt-5 text-white'>
                    <p><span className='fs-5 fw-bold'>Watch History:</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, laudantium asperiores nobis non praesentium, necessitatibus in iste sunt neque eligendi sit corporis ipsum vero. Eveniet perspiciatis iusto deleniti quod adipisci</p>
                  </div>

                </div>
                <div className="col-lg-6 p-5">
                <iframe width="460" height="315" src="https://www.youtube.com/embed/T94PHkuydcw?si=C0fWnSe9Au9-aQu2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

              </div>
              
            </div>

           
        </div>
  
      </div>
  
     </div>
      
   </>

  )
}

export default Landing