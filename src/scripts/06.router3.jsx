import { useState } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import "../App.css";
import data from '../data';
import Detail from '../pages/Detail';

import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {

  let [shoes] = useState(data);

  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{
              navigate('/')
            }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{
              navigate('/detail')
            }}>Detail</Nav.Link>
            
            {/* 숙제 */}
            <Nav.Link onClick={()=>{
              navigate('/event')
            }}>Event</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path="/" element={
              <>
                <div className="main-bg"></div>
                <div className="container">
                  <div className="row">
                    {
                      shoes.map((item, index)=>{
                        return(
                          <Card shoes={shoes[index]} i={index}></Card>
                        )
                      })
                    }
                  </div>
                </div> 
              </>
          } />

        {/* state 전송하기 */}
        {/* 
          URL파라미터 문법 
          /detail/:URL파라미터
        */}
        <Route path="/detail/:id" element={<Detail shoes={shoes}></Detail>} />

        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>위치</div>} />
        </Route>

        <Route path="/event" element={<Event/>}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념쿠폰</p>} />
        </Route>

        {/* 404페이지 만들기 */}
        <Route path="*" element={<div>없는페이지요</div>} />
      </Routes>
    </div>
  );
}

function About() {
  return(
    <div>
      <h4>회사정보임</h4>
      {/* Nested Routes의 element 보여주는 위치 */}
      <Outlet></Outlet>
    </div>
  )
}

function Event() {
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props) {
  return(
    <div className="col-md-4">
    <img src={"https://codingapple1.github.io/shop/shoes" + (props.i+1) + ".jpg"} alt="" width="80%"></img>
    <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
  )
}

export default App;
