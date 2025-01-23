
function outsideApartment() {
   document.getElementById("apartment").innerHTML = /*HTML*/
   `<div>
      <button onclick="enterHallway()" id="enter">Gå Inn</button>
      <p id="info">Du er utenfor en leilighet</p>
   </div>`;
   }
   outsideApartment();

   function enterHallway() {
      document.getElementById("apartment").classList.add("leilighet2");
      document.getElementById("apartment").innerHTML = /*HTML*/
      `<p id="info">Du er nå i gangen</p>
      <div id="deg">✸</div>
      <button id="gang" style="border:none;">Gang</button>
      <button onclick="enterLivingroom()" id="stue">Stue</button>
      <button onclick="enterBathroom()" id="bad">Bad</button>
      <button onclick="enterKitchen()" id="kjøkken">Kjøkken</button>`;
      }

      function enterKitchen() {
         document.getElementById("apartment").classList.add("leilighet2");
         document.getElementById("apartment").innerHTML = /*HTML*/
         `<p id="info">Du er nå på kjøkkenet</p>
         <div id="deg">✸</div>
         <button onclick="enterHallway()" id="gang">Gang</button>
         <button onclick="enterLivingroom()"id="stue">Stue</button>
         <button id="kjøkken" style="border:none;">Kjøkken</button>`;
         }
      outsideApartment();


