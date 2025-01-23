
function outsideApartment() {
   document.getElementById("apartment").classList.add("utenfor");
   document.getElementById("apartment").innerHTML = /*HTML*/
      `<button onclick="enterHallway()" id="enter">Gå Inn</button>
      <div id="deg">Du er utenfor en leilighet</div>`;
}
outsideApartment();

function enterHallway() {
   document.getElementById("apartment").classList.add("leilighet2");
   document.getElementById("apartment").innerHTML = /*HTML*/
      `<div id="deg">Du er nå i gangen</div>
      <button id="gang" style="border:none;">Gang</button>
      <button onclick="enterLivingroom()" id="stue">Stue</button>
      <button onclick="enterBathroom()" id="bad">Bad</button>
      <button onclick="enterKitchen()" id="kjøkken">Kjøkken</button>
      <button onclick="outsideApartment()" id="utsiden">Gå ut</button>`;
}

function enterKitchen() {
   document.getElementById("apartment").classList.add("leilighet2");
   document.getElementById("apartment").innerHTML = /*HTML*/
      `<div id="deg">Du er nå på kjøkkenet</div>
         <button onclick="enterHallway()" id="gang">Gang</button>
         <button onclick="enterLivingroom()"id="stue">Stue</button>
         <button id="kjøkken" style="border:none;">Kjøkken</button>`;
}

function enterLivingroom() {
   document.getElementById("apartment").classList.add("leilighet2");
   document.getElementById("apartment").innerHTML = /*HTML*/
      `<div id="deg">Du er nå i stua</div>
      <button onclick="enterHallway()" id="gang">Gang</button>
      <button onclick="enterLivingroom()" style="border:none;" id="stue">Stue</button>
      <button onclick="enterKitchen()" id="kjøkken">Kjøkken</button>`;
}

function enterBathroom() {
   document.getElementById("apartment").classList.add("leilighet2");
   document.getElementById("apartment").innerHTML = /*HTML*/
      `<div id="deg">Du er nå på badet</div>
      <button onclick="enterHallway()" id="gang">Gang</button>
      <button style="border:none;" id="bad">Bad</button>`;
}

outsideApartment();


