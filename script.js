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
  let resultText = 'Le domaine qui te correspond est ' + result + '. Tu souhaites en découvrir davantage sur ce domaine ? ';
  let videoLink = '';
  switch(result) {
    case 'Finances':
      videoLink = 'https://www.youtube.com/watch?v=usAFrzshJIs';
      break;
    case 'Communication':
      videoLink = 'https://www.youtube.com/watch?v=7BFYAPoeO7Y';
      break;
    case 'Ressources Humaines':
      videoLink = 'https://www.youtube.com/watch?v=8KyQR__DIG8';
      break;
    case 'Systèmes d\'information':
      videoLink = 'https://www.youtube.com/watch?v=9UVpy_RU8Xk';
      break;
    case 'Management/Ressources':
      videoLink = 'https://www.youtube.com/watch?v=HLqLqePxeV0';
      break;
    default:
      videoLink = '#';
  }
  document.getElementById('result').innerHTML = resultText + '<a href="' + videoLink + '" target="_blank">Clique ici</a> pour découvrir la vidéo d\'un professionnel du secteur.';
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
