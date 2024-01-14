import React from "react";

const Form = () => {
    function change() {
        let lis = document.querySelectorAll(".colors li");
        lis.forEach((li) => {
            li.addEventListener("click", (e) => {
                e.target.parentElement
                    .querySelectorAll(".active")
                    .forEach((element) => {
                        element.classList.remove("active");
                    });
                e.target.classList.add("active");
            });
        });
    }
    return (
        <ul className="colors">
            <li class="active" onClick={change}></li>
            <li onClick={change}></li>
            <li onClick={change}></li>
        </ul>
    );
};

export default Form;
