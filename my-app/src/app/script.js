
function cargar(){

  const sounds = document.getElementById("first");

  sounds.addEventListener('click', function(){

    sounds.innerHTML = <audio src="assets\audio\007901766_prev.mp3"></audio>
    console.log('deberia sonar');
  })
}
