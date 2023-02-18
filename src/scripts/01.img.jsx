import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "../App.css";

// import로 이미지 가져오기
// 그런데 import하는 게 많으면 가져오기 힘드니 public 폴더 쓰면 됨
// import bg from '../imgs/bg.png';

function App() {
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
      
      {/* 
        JSX에서 바로 이미지 넣기
      */}

      {/* <div className="main-bg" style={{background: `url(${bg})` }}></div> */}
      <div className="main-bg"></div>

      {/* 상품 레이아웃 3개 만들기 */}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/* 
              외부에 호스팅해둔 이미지면 이미지 절대주소만 넣으면 됨 
              퍼블릭 폴더에 이미지 넣고 다음 경로를 사용해도 됨
            */}
            <img src={process.env.PUBLIC_URL + '/logo192.png'} alt=""/> 
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes2.jpg" alt="" width="80%"></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes3.jpg" alt="" width="80%"></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div> 

    </div>
  );
}

export default App;
