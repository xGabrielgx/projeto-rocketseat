function handleMode() {
  const body = document.querySelector('body');
  body.classList.toggle('light');
  
  // pegar a tag img
  const img = document.querySelector('#profile img');

  if(body.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Personagem do anime dungeon, nome Bell Cranel');
  } else {
    img.setAttribute('src', './assets/avatar.png');
    img.setAttribute('alt', 'Foto do anime attack on titan, personagem levi')
  }

//   if(!body.classList.contains('light')) {
//     body.classList.add('light');
//   } else {
//   body.classList.remove('light')
// }
// } 

  // body ? body.classList.remove('light') : body.classList.add('light'); 
}