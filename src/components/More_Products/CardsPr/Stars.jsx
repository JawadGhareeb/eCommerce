import React from "react";
import {AiFillStar} from "react-icons/ai"
import {AiOutlineStar} from "react-icons/ai"
function Stars (props) {
    return (
        <>
            {props.numberOfStars===5?<><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></>:null}
            {props.numberOfStars===4?<><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></>:null}
            {props.numberOfStars===3?<><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/></>:null}
            {props.numberOfStars===2?<><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></>:null}
            {props.numberOfStars===1?<><AiFillStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></>:null}
            {props.numberOfStars===0?<><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></>:null}
        </>
    )
}
export default Stars ;