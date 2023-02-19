import { useState } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import "../App.css";
import data from '../data';
import Details from '../pages/Detail';

// useNavigate, Outlet
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {

  let [shoes] = useState(data);

  /* 
    페이지 이동을 도와주는 useNavigate() 리액트 훅
    훅은 유용한 기능들이 들어있는 함수 정도로 생각하자
    <Link />도 페이지 이동 기능이지만 a 태그 같아서 별로임
    기존 태그를 유지하면서 페이지 이동을 시켜줌
    navigate(페이지경로)
  */
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {/* 
              useNavigate로 페이지 이동이 가능 
              navigate(-1) 뒤로가기 버튼이다
            */}
            <Nav.Link onClick={()=>{
              navigate('/')
            }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{
              navigate('/detail')
            }}>Detail</Nav.Link>
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
        <Route path="/detail" element={<Details></Details>} />

        {/* 404페이지 만들기 */}
        <Route path="*" element={<div>없는페이지요</div>} />

        {/* 
          Nested Routes 
          /about/memebers
          /about/location
          등의 부가 페이지 만들기  

          <Route path="/about" element={<About/>} />
          <Route path="/about/members" element={<About/>} />
          <Route path="/about/location" element={<About/>} />

          //라우트 안에 라우트를 넣을 수 있음 - nested routes
          <Route path="/about" element={<About/>}>
            <Route path="member" element={<About/>} />
            <Route path="location" element={<About/>} />
          </Route>
        */}
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>위치</div>} />
        </Route>
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
