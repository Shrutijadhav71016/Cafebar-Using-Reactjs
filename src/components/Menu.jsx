import Carousel from "better-react-carousel";
import React, { useEffect } from "react";
import './Menu.css';
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('name')) {
      navigate('/login');
    }
  }, [navigate]);
  return (
    <div>
      <div className="menu_container">
        <Carousel cols={2} rows={2} gap={10} loop>
          <Carousel.Item>
            <img
              src="https://images.unsplash.com/photo-1497636577773-f1231844b336?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZmZlfGVufDB8fDB8fHww"
              height="400px"
              width="500px"
              alt="Coffee"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=60"
              height="400px"
              width="500px"
              alt="Pizza"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=60"
              height="400px"
              width="500px"
              alt="Maggie"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=721&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="400px"
              width="500px"
              alt="Tea"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://plus.unsplash.com/premium_photo-1713447395823-2e0b40b75a89?q=80&w=682&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="400px"
              width="500px"
              alt="Cake"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images.unsplash.com/photo-1559466273-d95e72debaf8?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="400px"
              width="500px"
              alt="Sandwitch"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://plus.unsplash.com/premium_photo-1672774750509-bc9ff226f3e8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="400px"
              width="500px"
              alt="Fries"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="400px"
              width="500px"
              alt="Dosa"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images.unsplash.com/photo-1558584724-0e4d32ca55a4?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="400px"
              width="500px"
              alt="Waffle"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images.unsplash.com/photo-1637572815755-c4b80092dce1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="400px"
              width="500px"
              alt="Hot chocolate"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://plus.unsplash.com/premium_photo-1667546202654-e7574a20872c?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="400px"
              width="500px"
              alt="cheese cake"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://plus.unsplash.com/premium_photo-1739906393226-9978e7943b00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="400px"
              width="500px"
              alt="cheese sandwitch"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Menu;
