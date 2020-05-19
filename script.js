// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()

//date de jour

 function setDate (){
     const now = new Date();
     
     const seconds = now.getSeconds();
     const secondsDeg = ((seconds/60)*360);
     AIGUILLESEC.style.transform = `rotate(${secondsDeg}deg)`;

     const minutes = now.getMinutes();
     const minutesDeg = ((minutes/60)*360);
     AIGUILLEMIN.style.transform = `rotate(${minutesDeg}deg)`;

     const hours = now.getHours();
     const hoursDeg = ((hours/12)*360);
     AIGUILLEHR.style.transform = `rotate(${hoursDeg}deg)`;



 }

setDate();
 setInterval(setDate, 1000);

//Ajouter l'heure , minite , seconde  dans des varaiables

