"use strict";

import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    event.preventDefault();

    dateCalcResult.innerHTML = "";

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value;
    secondDate = secondDate.value;
    
    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else {
        dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
    }
}
