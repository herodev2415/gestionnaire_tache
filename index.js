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
      tasks: ""
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
  console.log("Liste des jours avec les tâches mises à jour:");
  console.log("=========================================");
  weeksday.forEach(day => {
      console.log(`${day.day}: ${day.task}`);
  });
}

// Exécution des fonctions
addSpecificTasks(); // On met à jour les tâches
displayWeeksday(); // On affiche la liste mise à jour 



for (let i = 0; i < weeksday.length; i++) {
    console.log(" voici le jour de la semaine " + weeksday[i].day + " et du tache " + weeksday[i].task)
}

// une fonction qui change les jours en français

function translateTheDayIntoFrench(weeksday) {
  const traduction = {
      "Monday": "Lundi",
      "Tuesday": "Mardi",
      "Wednesday": "Mercredi",
      "Thursday": "Jeudi",
      "Friday": "Vendredi",
      "Saturday": "Samedi",
      "Sunday": "Dimanche"
  };

  for (let i = 0; i < weeksday.length; i++) {
        weeksday[i].day = traduction[weeksday[i].day]||weeksday[i].day;
    }



// Nirintsoa : Function pour supprimer les deux dernière tàches et ajoute deux nouvelles tâches.

function updateTasks () {
  tasks.splice(5, 6); // supprimer
  tasks.push("je vais au marché", "je fais du sport"); // ajouter 
}

// Heritiana : 
// Créer une fonction qui nettoie toutes les tâches en string vide, en utilisant une boucle for et ce qui est nécessaire. 
function removeTaskString(){
  for(let i=0;i<weeksday.length;i++){
    weeksday[i].task=""
  }
}

// Tanjona:
// Reaffichage de la liste mis à jour de la liste de jours
//Exécution  des fonctions
addSpecificTasks();
displayWeeksday();
  
//Affichage des jours un par un
for (let i = 0; i<weeksday.length; i++){
  console.log(`Voici le jour de la semaine ${weeksday[i].day} et sa tâche: ${weeksday[i].task}`);

}
// **Mise à jour des tâches**
updateTasks();       // Supprime et ajoute de nouvelles tâches
addSpecificTasks();  // Réassigne les nouvelles tâches
console.log("\nAprès modification des tâches :");
displayWeeksday();   // Affiche la liste mise à jour

// **Traduction des jours en français**
translateTheDayIntoFrench();
console.log("\nAprès traduction des jours en français :");
displayWeeksday();   // Affiche la liste avec les jours en français

// **Nettoyage des tâches**
removeTaskString();
console.log("\nAprès suppression des tâches :");
displayWeeksday();   // Affiche la liste avec les tâches vides

