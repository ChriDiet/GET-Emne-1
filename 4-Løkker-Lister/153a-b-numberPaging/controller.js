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
   createNumbersListHtml(numbersToDisplay)
   updateView()
}
