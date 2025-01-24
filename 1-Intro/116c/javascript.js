function outsideApartment() {
   document.getElementById("apartment").classList.add("leilighet2");
   document.getElementById("apartment").classList.add("utenfor");
   document.body.style.backgroundColor = "rgb(158, 158, 158)";
   document.getElementById("apartment").innerHTML = /*HTML*/
      `<div id="deg">Du er utenfor en leilighet</div>
      <button onclick="enterHallway()" id="gang">Gå inn</button>`;
}

function enterHallway() {
   document.getElementById("apartment").classList.remove("utenfor");
   document.getElementById("apartment").classList.add("leilighet2");
   document.body.style.backgroundColor = "rgb(107, 160, 123)";
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
   document.body.style.backgroundColor = "rgb(204, 100, 100)";
   document.getElementById("apartment").innerHTML = /*HTML*/
      `<div id="deg">Du er nå på kjøkkenet</div>
         <button onclick="enterHallway()" id="gang">Gang</button>
         <button onclick="enterLivingroom()"id="stue">Stue</button>
         <button id="kjøkken" style="border:none;">Kjøkken</button>`;
}

function enterLivingroom() {
   document.getElementById("apartment").classList.add("leilighet2");
   document.body.style.backgroundColor = "rgb(233, 214, 107)";
   document.getElementById("apartment").innerHTML = /*HTML*/
      `<div id="deg">Du er nå i stua</div>
      <button onclick="enterHallway()" id="gang">Gang</button>
      <button onclick="enterLivingroom()" style="border:none;" id="stue">Stue</button>
      <button onclick="enterKitchen()" id="kjøkken">Kjøkken</button>`;
}

function enterBathroom() {
   document.body.style.backgroundColor = "rgb(85, 121, 134)";
   document.getElementById("apartment").classList.add("leilighet2");
   document.getElementById("apartment").innerHTML = /*HTML*/
      `<div id="deg">Du er nå på badet</div>
      <button onclick="enterHallway()" id="gang">Gang</button>
      <button style="border:none;" id="bad">Bad</button>`;
}

enterHallway();


