import React, { useContext, useEffect } from 'react';
import { samplecontext } from './App';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbars from './Navbars';
import { FaTriangleExclamation } from "react-icons/fa6";


const Cart = () => {
  const { addcard, setaddcard, count, setcount, sethide } = useContext(samplecontext);
  useEffect(() => {
    sethide(false)
  }, [])

  const add = (index) => {
    const update = { ...count, [index.id]: (count[index.id] || 0) + 1 }
    setcount(update)
  };

  const subtract = (index) => {
    if (count[index.id] > 0) {
      const update = { ...count, [index.id]: count[index.id] - 1 }
      setcount(update)
    }
  };

  const remove = (index) => {
    setaddcard(addcard.filter((arg) => arg !== index));
  };

  const emptyCart = () => {
    setaddcard([]);
  };

  const price = addcard.map((index) => {
    return index.price * count[index.id]
  })

  const totalprice = (addcard.length !== 0 ? price : [0]).reduce((a, b) => a + b)

  return (
    <div>
      <Navbars />
      {addcard.map((index) => {
        return (
          <Card className='card'>
            <Card.Img className='cartimage' src={index.thumbnail} />
            <Card.Body>
              <Card.Title style={{ textAlign: 'center' }}>{index.brand} {index.title}</Card.Title>
              <Card.Text>
                price:${index.price}
              </Card.Text>
              <div className='count'>
                <button className='subtract' onClick={() => subtract(index)}>-</button>
                <p  > {count[index.id] || 0} </p>
                <button className='' onClick={() => add(index)}>+</button>
              </div>
              <button className='removebutton' onClick={() => remove(index)}>Remove</button>
            </Card.Body>
          </Card>
        );
      })}
      {addcard.length !== 0 ?
        <h1 className='price'>Total price =${totalprice} </h1> :
        <FaTriangleExclamation className='emptyicon' />
      }
      {addcard.length !== 0 ?
        <div className='text-center'>
          <button className='emptybutton' onClick={emptyCart}>Empty Cart</button> 
        </div>:
        <p className='emptypara' >Your cart is empty</p>
      }
    </div>
  );
};
export default Cart;