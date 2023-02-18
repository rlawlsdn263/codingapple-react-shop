import { useState } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import "../App.css";

/* 데이터 가져오기
import a from '../data';

데이터 여러 개 가져오기
중괄호로 가져올 때는 이름변경X
import {a,b} from '../data' */

import data from '../data';

function App() {
  // 서버에서 가져온 데이터 
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <div className="main-bg"></div>
      
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="" width="80%"/> 
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].content}</p>
          </div>
          <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes2.jpg" alt="" width="80%"></img>
          <h4>{shoes[1].title}</h4>
            <p>{shoes[1].content}</p>
          </div>
          <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes3.jpg" alt="" width="80%"></img>
          <h4>{shoes[2].title}</h4>
            <p>{shoes[2].content}</p>
          </div>
        </div>
      </div> 

    </div>
  );
}

//숙제
//1.컴포넌트화 하기
//2. map으로 리스트 렌더링하기

export default App;
