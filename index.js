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
    week[i].task=tasks[i].task;
  }
}



for (let i = 0; i < weeksday.length; i++) {
    console.log(" voici le jour de la semaine " + weeksday[i].day + " et du tache " + weeksday[i].task)
}

// une fonction qui change les jours en français

function traduireJoursEnFrancais(weeksday) {
  const traduction = {
      "Monday": "Lundi",
      "Tuesday": "Mardi",
      "Wednesday": "Mercredi",
      "Thursday": "Jeudi",
      "Friday": "Vendredi",
      "Saturday": "Samedi",
      "Sunday": "Dimanche"
  };

  return weeksday.map(objetJour => ({
      day: traduction[objetJour.day] || objetJour.day, // Remplace si trouvé
      task: objetJour.task
  }));
}

