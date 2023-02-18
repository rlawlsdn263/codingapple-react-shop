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
  let [index, setIndex] = useState(0);

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
          {/* 
            <Card/> 쓸 때 마다 다른 내용보여주고 싶으면 props
            컴포넌트마다 다른 props를 보낼 수 있음

            <Card shoes={shoes[0]} i={1}></Card>
            <Card shoes={shoes[1]} i={2}></Card>
            <Card shoes={shoes[2]} i={3}></Card>
          */}

          {
            shoes.map((item, index)=>{
              return(
                // index를 활용해 필요한 데이터에 접근가능
                <Card shoes={shoes[index]} i={index}></Card>
              )
            })
          }

        </div>
      </div> 

    </div>
  );
}

//App의 state는 props로 전달할 수 있음
function Card(props) {
  return(
    <div className="col-md-4">
    {/* 
      문자중간에 변수 넣는 문법  
      props.i+1로 index값을 키울 수 있음  
    */}
    <img src={"https://codingapple1.github.io/shop/shoes" + (props.i+1) + ".jpg"} alt="" width="80%"></img>
    <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
  )
}

export default App;
