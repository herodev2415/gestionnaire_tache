// Tolotra
let weeksday=[
    {
     day: "Monday",
     task: ""   
    },
    {
     day: "Tuesday",
     task: ""
    },
    {
     day: "Wednesday", 
     task: ""  
    },
    {
      day: "Thursday",
      task: ""
    },
    {
      day: "Friday",
      task: ""
    },
    {
      day: "Saturday",
      task: ""
    },
    { 
       day: "Sunday",
       task: ""
    }
];
// Nirintsoa : créer une liste de tâche avec le même length que la liste des jours
let tasks = [
  
  "je vais à l'école",
  "je fais les courses",
  "je fais du sport",
  "je travaille sur mes projets",
  "je fais le ménage",
  "je me repose",
  "je vais à l'église"
];

// Heritiana :
// Ajouter les tâches specifique pour chaque journée dans la liste des jours en utilisant une boucle for dans une fonction.
function addSpecificTasks(){
  for(let i=0;i<weeksday.length;i++){
    weeksday[i].task=tasks[i];
  }
}

// Tanjona
// Affichage de la liste des jours avec les tâches mis à jour en utilisant une fonction qui les affiche sur une console
function displayWeeksday() {
  for(let i=0;i<weeksday.length;i++){
    console.log(weeksday[i].day + ":"+ weeksday[i].task)
  }
}
// Exécution des fonctions
console.log("=========================================");
console.log("I: Liste des jours avec les tâches mises à jour:");
console.log("=========================================");
addSpecificTasks(); // On met à jour les tâches
displayWeeksday(); // On affiche la liste mise à jour 

//Tolotra
// une fonction qui change les jours en français
function translateTheDayIntoFrench() {
  const traduction = {
      "Monday": "Lundi",
      "Tuesday": "Mardi",
      "Wednesday": "Mercredi",
      "Thursday": "Jeudi",
      "Friday": "Vendredi",
      "Saturday": "Samedi",
      "Sunday": "Dimanche"
  }
  for (let i = 0; i < weeksday.length; i++) {
    weeksday[i].day = traduction[weeksday[i].day];
}
}

// Nirintsoa : Function pour supprimer les deux dernière tàches et ajoute deux nouvelles tâches.
function updateTasks () {
  tasks.splice(5, 2); // supprimer
  tasks.push("je vais au marché", "je fais du sport"); // ajouter 
  addSpecificTasks();
}

// Heritiana : 
// Créer une fonction qui nettoie toutes les tâches en string vide, en utilisant une boucle for et ce qui est nécessaire.
function removeTaskString(index) {
  if (index >= 0 && index < weeksday.length) {
    weeksday[index].task = "";
  } else {
    console.log("Cet index n'existe pas, desolé!!!");
  }
}

// Tanjona :
console.log("=========================================");
console.log("II: Liste des jours modifiés en Français avec la suppression des deux derniers taches et en les modifiant:");
console.log("=========================================");
translateTheDayIntoFrench();
updateTasks();
displayWeeksday(); // On affiche la liste mise à jour


console.log("=========================================");
console.log("III: Liste des jours où on a supprimé les tâches voulues :");
console.log("=========================================");
removeTaskString(4);
displayWeeksday();

