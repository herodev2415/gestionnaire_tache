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
]
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

