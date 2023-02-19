import { useState } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import "../App.css";

// 라이브러리 사용법
import { Routes, Route, Link } from 'react-router-dom';

import data from '../data';

//pages와 관련된 컴포넌트는 pages 폴더에 저장됨
import Details from '../pages/Detail';

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
          {/* /detail로 접근하면 <Details가 나옴 */}
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

export default App;
