import React, { useEffect, useState } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const ID = (e) => {
    function BeforeDelete(el) {
        if (window.confirm(`Do you realy want to delete it ?`)) {
            e.deleteItem(el.id);
        }
    }
    const [num, setnum] = useState(1);
    const plus = (e) => {
        setnum(() => num + 1);
    };
    const mius = () => {
        if (num > 1) setnum(() => num - 1);
        else BeforeDelete(e);
    };
    return (
        <>
            <tr className="card" key={e.id}>
                <td>
                    <RiDeleteBin7Line onClick={() => BeforeDelete(e)} />
                    <img src={e.imgUrl} alt="" />
                    <span>{e.explore}</span>
                </td>
                <td>${e.costAfter}</td>
                <td className="quantity">
                    <AiOutlinePlus onClick={plus} />
                    <span>{num}</span>
                    <AiOutlineMinus onClick={mius} />
                </td>
                <td>${`${(e.costAfter * num).toFixed(2)}`}</td>
            </tr>
        </>
    );
};

export default ID;
