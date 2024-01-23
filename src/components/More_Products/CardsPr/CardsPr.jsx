import React from "react";
import { useDispatch } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { insertPost } from "../../state/postSlice.js";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Stars from "./Stars";
import "./Mcards.css";
function CardsPr(props) {
  const dispatch = useDispatch();
  const sub = () => {
    const pro1 = props.imgUrl;
    const pro2 = props.numberOfStars;
    const pro3 = props.explore;
    const pro4 = props.costBefore;
    const pro5 = props.costAfter;
    const pro6 = props.sold;
    const pro7 = props.text;
    const pro8 = props.id;
    console.log({ pro1, pro2, pro3, pro4, pro5, pro6, pro7, pro8 });
    dispatch(
      insertPost({
        id: pro8,
        imgUrl: pro1,
        numberOfStars: pro2,
        explore: pro3,
        costBefore: pro4,
        costAfter: pro5,
        sold: pro6,
        text: pro7,
        number: 1,
      })
    );
  };

  return (
    <div className="card">
      {props.sold ? <p>{props.numOfSold}</p> : null}
      <div className="img">
        <img src={props.imgUrl} alt="" />
        <div className="add">
          <div className="i">
            <AiOutlineHeart onClick={() => console.log(props.cart)} />
          </div>
          <span onClick={sub}>{props.text}</span>
          <div className="i">
            <MdOutlineRemoveRedEye />
          </div>
        </div>
      </div>
      <div className="stars">
        <Stars numberOfStars={props.numberOfStars} />
      </div>
      <h3>
        <a>{props.explore}</a>
      </h3>
      <div className="cost">
        <span>${props.costAfter}</span>
        <span>{props.costBefore}</span>
      </div>
    </div>
  );
}

export default CardsPr;
