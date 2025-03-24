   function updateView() {
   document.getElementById('app').innerHTML = /*HTML*/ `
      ${createNumbersListHtml()}<br><br>
      ${createButtonsHtml()}<br><br>
      <div> 
         Antall treff 
         <select onchange="setPageSize(value)" name="pageView" id="pageView" value="value">
            ${createShowResultsHtml()}
         </select>
      </div>
   `;
}

function createShowResultsHtml() {
   let resultQty = [10,20,50];
   let html = '';
   let isSelected = "${selectedPageSize == `${qty}` ? 'selected' : ''}"
   
   for (let qty of resultQty) {
      html+= /*HTML*/ `
         <option value=${qty} ${selectedPageSize == `${qty}` ? 'selected' : ''}>${qty}</option>
      `;
   }
   return html;
}

function setPageSize(size) {
   pageSize = size;
   selectedPageSize = size;
   skipAndTake(pageIndex)
   updateView()
}
function skipAndTake(pageIndex) {
   let skipCount = pageIndex * pageSize;
   let takecount = pageSize;
   numbersToDisplay = [];
   for (let number of numbers) {
      skipCount--;
      if (skipCount >= 0) continue;
      if (takecount <= 0) break;
      takecount--;
      numbersToDisplay.push(number);
   }
   updateView()
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