document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Pour éviter le rechargement de la page
  
    // Récupération des réponses de l'utilisateur
    let answers = {};
    for (let i = 1; i <= 10; i++) {
      let questionName = 'question' + i;
      let selectedOption = document.querySelector('input[name="' + questionName + '"]:checked');
      if (selectedOption) {
        answers[questionName] = selectedOption.value;
      }
    }
  
    // Calcul du résultat final
    let result = calculateResult(answers);
  
    // Affichage du résultat
    document.getElementById('result').innerHTML = 'Votre domaine dominant est : ' + result;
  });
  
  // Fonction pour calculer le résultat final
  function calculateResult(answers) {
    let counts = {
      'A': 0,
      'B': 0,
      'C': 0,
      'D': 0,
      'E': 0
    };
  
    // Compter les réponses
    for (let question in answers) {
      counts[answers[question]]++;
    }
  
    // Trouver la lettre dominante
    let maxCount = 0;
    let dominantLetter;
    for (let letter in counts) {
      if (counts[letter] > maxCount) {
        maxCount = counts[letter];
        dominantLetter = letter;
      }
    }
  
    // Mapper la lettre dominante avec le domaine correspondant
    let resultMapping = {
      'A': 'Finances',
      'B': 'Communication',
      'C': 'Ressources Humaines',
      'D': 'Systèmes d\'information',
      'E': 'Management/Ressources'
    };
  
    return resultMapping[dominantLetter];
  }
  