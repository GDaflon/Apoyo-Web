//funcao scroll menu--------------------------------------------------
window.addEventListener('scroll', function () {
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 400)
})

window.addEventListener('scroll', function () {
    let imgElement = document.querySelector('a[href="index.html"] img');
    if (window.scrollY > 400) {
        imgElement.src = 'apoyo2.png';
    } else {
        imgElement.src = 'apoyo.png';
    }
});

//funcao troca de palavras-----------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    const dynamicTextElement = document.getElementById('dynamicText');
    const phrases = ["É REABILITAÇÃO", "É SAÚDE", "É EQUILÍBRIO"];
    let currentPhraseIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let typingSpeed = 150;

    function type() {
        const fullText = phrases[currentPhraseIndex];
        if (isDeleting) {
            currentText = fullText.substring(0, currentText.length - 1);
        } else {
            currentText = fullText.substring(0, currentText.length + 1);
        }

        dynamicTextElement.textContent = currentText;

        let typeSpeed = 100;
        if (isDeleting) {
            typeSpeed /= 2;
        }

        if (!isDeleting && currentText === fullText) {
            typeSpeed = 1000;
            isDeleting = true;
        } else if (isDeleting && currentText === '') {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        }

        setTimeout(type, typeSpeed);
    }

    setTimeout(type, typingSpeed);
});

//funcao slide depoimentos-----------------------------------------
var slides = ['dep1.png', 'dep2.png', 'dep3.png', 'dep4.png', 'dep5.png'];
var tam = slides.length;
var satual = 0; // onde vai começar
var tpmslider;

function trocaAutomatica() {
  satual++;
  if (satual >= tam) {
    satual = 0;
  }
  document.querySelector('#dvSlider').style.backgroundImage = `url('${slides[satual]}')`;
}

function iniciaSlider() {
  document.querySelector('#dvSlider').style.backgroundImage = `url('${slides[satual]}')`;
  tpmslider = setInterval(trocaAutomatica, 4000);
}

function parar() {
  clearInterval(tpmslider);
}

function troca(dir) {
  satual += dir;
  if (satual < 0) {
    satual = tam - 1;
  } else if (satual >= tam) {
    satual = 0;
  }
  document.querySelector('#dvSlider').style.backgroundImage = `url('${slides[satual]}')`;
  clearInterval(tpmslider);
}

document.addEventListener('DOMContentLoaded', iniciaSlider);