import { useParams } from "react-router-dom";

function Details(props) {
  // 유저가 URL 파라미터에 입력한 걸 가져오려면 useParams()
  let { id } = useParams();
  // 파라미터에 입력한 id가 동일한 상품만 반환해줌
  let searchItem = props.shoes.find((item) => {
    return item.id == id;
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
            alt=""
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{searchItem.title}</h4>
          <p>{searchItem.content}</p>
          <p>{searchItem.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Details;
