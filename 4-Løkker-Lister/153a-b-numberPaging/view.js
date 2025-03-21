function updateView() {
   document.getElementById('app').innerHTML = /*HTML*/ `
   <
      ${createNumbersListHtml()}
      ${createButtonsHtml()}
   `;
}

function createButtonsHtml() {
   let numberOfButtons = Math.ceil(numbers.length/pageSize);
   let html = '';
   for (let i = 0; i < numberOfButtons; i++) {
      let disableButton = false;
      if (pageIndex > i)
         disableButton = true;
      html += /*HTML*/ `
         <button onclick="skipAndTake(${[i]})" >${[i+1]}</button>
      `;
   }
   return html;
}

function createNumbersListHtml() {
   let html = '';

   for (let number of numbersToDisplay) {
      html += /*HTML*/ `
      <li>
         ${number}
      </li>
      `;
   }
   return html;
}