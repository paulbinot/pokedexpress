const types = document.getElementsByClassName('type');
console.log(types);

for (const type of types) {
  const textType = type.textContent;
  console.log(textType);
  switch (textType) {
  case 'Grass ':
    type.style.color = "#38bf4b";
    type.style.borderColor = "#38bf4b";
    break;
  case 'Poison ':
    type.style.color = "#b667cf";
    type.style.borderColor = "#b667cf";
    break;
  case 'Bug ':
    type.style.color = "#84c400";
    type.style.borderColor = "#84c400";
    break;
  case 'Normal ':
    type.style.color = "#919aa2";
    type.style.borderColor = "#919aa2";
    break;
  case 'Fighting ':
    type.style.color = "#dc7a25";
    type.style.borderColor = "#dc7a25";
    break;
  case 'Flying ':
    type.style.color = "#8aace4";
    type.style.borderColor = "#8aace4";
    break;
  case 'Ground ':
    type.style.color = "#e97333";
    type.style.borderColor = "#e97333";
    break;
  case 'Rock ':
    type.style.color = "#c9b787";
    type.style.borderColor = "#c9b787";
    break;
  case 'Ghost ':
    type.style.color = "#4b6ab3";
    type.style.borderColor = "#4b6ab3";
    break;
  case 'Steel ':
    type.style.color = "#5a8fa3";
    type.style.borderColor = "#5a8fa3";
    break;
  case 'Fire ':
    type.style.color = "#ff9741";
    type.style.borderColor = "#ff9741";
    break;
  case 'Water ':
    type.style.color = "#3393dd";
    type.style.borderColor = "#3393dd";
    break;
  case 'Electric ':
    type.style.color = "#f3ca00";
    type.style.borderColor = "#f3ca00";
    break;
  case 'Psychic ':
    type.style.color = "#f76371";
    type.style.borderColor = "#f76371";
    break;
  case 'Ice ':
    type.style.color = "#4acaba";
    type.style.borderColor = "#4acaba";
    break;
  case 'Dragon ':
    type.style.color = "#006cc3";
    type.style.borderColor = "#006cc3";
    break;
  case 'Dark ':
    type.style.color = "#585163";
    type.style.borderColor = "#585163";
    break;
  case 'Fairy ':
    type.style.color = "#f385e4";
    type.style.borderColor = "#f385e4";
    break;
  default:
    console.log("def");
  }
}
