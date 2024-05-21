import React, { useContext, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { samplecontext } from './App';
import { FaStar } from "react-icons/fa6";
import Navbars from './Navbars';



const Cards = () => {
  const { addcard, setaddcard, product, count, setcount,sethide } = useContext(samplecontext)
  useEffect(() => {
   sethide(true)
  }, [])
  
const addtocart = (i) => {
    const update = addcard.filter((index) => index === i)
    if (update.length === 0) {
      setaddcard([...addcard, i])
      const cart = { ...count, [i.id]: 1 }
      setcount(cart)
    }
  }

  return (
    <div>
      <Navbars />
      {
        product.map((index) => {
          return (
            <Card className='card' >
              <Card.Img className='cardimage'  variant="top" src={index.thumbnail} />
              <Card.Body>
                <Card.Title className='text-center'>
                  {index.title}
                  </Card.Title>
                <Card.Text>
                <div className='d-flex'>
                <p><FaStar className='staricon' /> { index.rating.toFixed(1)}</p>
                 <p className='discount'>{index.discountPercentage.toFixed(0)}% Discount</p>
                </div>
                
                <p className='cardprice'> $ {index.price}</p>

                </Card.Text>
                
                  <Button className='cardbutton' onClick={() => addtocart(index)}>Add to cart</Button>
                
              </Card.Body>
            </Card>
          )
        })
      }
    </div>
  )
}
export default Cards