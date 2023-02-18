import { useState } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import "../App.css";

// 라이브러리 사용법
import { Routes, Route, Link } from 'react-router-dom';

import data from '../data';

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {/* 
              <Link>로 페이지 이동 버튼 
              to 속성으로 경로 설정
            */}
            <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link>
          </Nav>
        </Container>
      </Navbar>
      
      {/* 라우터로 페이지 나누는 법 */}
      <Routes>
        {/* 
          라우트는 페이지를 가리킨다 
          path 속성으로 경로를 정하고 element로 JSX를 렌더링
          바껴야하는 부분에만 Route로 HTML 렌더링을 한다
        */}
        <Route path="/" element={
              // 페이지도 컴포넌트로 만들면 한 눈에 볼 수 있음
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
      </Routes>
    </div>
  );
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

//숙제! 상세페이지 컴포넌트 만들기
function Details() {
  return(
      <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt=""/>
        </div>
        <div className="col-md-6">
        <h4 className="pt-5">상품명</h4>
        <p>상품설명</p>
        <p>120000원</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>
  </div> 
  )
}

export default App;
