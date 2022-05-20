let UBPDinterval = false;
// Funciones para avanzar, retroceder o reproducir sliders
// Parámetro el: id del slider
// Parámetro cl: clase de los slides
// Parámetro val: valida si el slider tiene puntos (dots) o no
// Parámetro num: número del slide sobre el que se realiza la acción
// Parámetro but: id del botón relacionado a la acción
// Parámetro time: tiempo para la ejecución de la acción 

const UBPDnextSlide = (el, cl) => {
  //Calcula número de slides
  let numberOfSlides = document.getElementsByClassName(cl).length;
  let container = document.getElementById(el);
  // Mide cuántos elementos se muestran 
  let maxPosition = Math.round((container.parentElement.offsetWidth / document.getElementsByClassName(cl)[0].offsetWidth)) - 1;
  let position = parseInt(container.getAttribute('data-position'));
  let percentageToMove = position*(100/numberOfSlides);
  if(position >= (numberOfSlides - maxPosition)){
    position = 0;
    percentageToMove = 0;
  }
  container.setAttribute('data-position', (position + 1));
  container.style.transform = 'translateX(-' + percentageToMove + '%)';
  if(el == 'UBPDsliderHome'){
    UBPDactiveDot(position + 1);
  }
};

const UBPDprevSlide = (el, cl) => {
  let numberOfSlides = document.getElementsByClassName(cl).length;
  let container = document.getElementById(el);
  let maxPosition = Math.round((container.parentElement.offsetWidth / document.getElementsByClassName(cl)[0].offsetWidth)) - 1;
  let position = parseInt(container.getAttribute('data-position'));
  let percentageToMove = (position - 2) *(100/numberOfSlides);
  if(position <= 1){
    position = (numberOfSlides - maxPosition) + 1;
    percentageToMove = ((numberOfSlides - maxPosition) - 1) *(100/numberOfSlides);
  }
  container.setAttribute('data-position', (position - 1));
  container.style.transform = 'translateX(-' + percentageToMove + '%)';
  if(el == 'UBPDsliderHome'){
    UBPDactiveDot(position - 1);
  }
};

const UBPDgotoSlide = (el, cl, num) => {
  if(UBPDinterval){
    clearInterval(UBPDinterval);
    UBPDinterval = false;
  }
  let numberOfSlides = document.getElementsByClassName(cl).length;
  let container = document.getElementById(el);
  let position = num;
  let percentageToMove = (position - 1) *(100/numberOfSlides);
  container.setAttribute('data-position', position);
  container.style.transform = 'translateX(-' + percentageToMove + '%)';
  if(el == 'UBPDsliderHome'){
    UBPDactiveDot(num);
  }
};

//Activa el punto del slider
const UBPDactiveDot = (num) =>{
  let dots = document.getElementsByClassName("UBPDSlider-buttons-dots-element");
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  dots[num - 1].classList.add('active');
}















  //  segundo slider

  const UBPDnextSub = (el, cl) => {
    //Calcula número de slides
    let numberOfSlides = document.getElementsByClassName(cl).length;
    let container = document.getElementById(el);
    // Mide cuántos elementos se muestran 
    let maxPosition = Math.round((container.parentElement.offsetWidth / document.getElementsByClassName(cl)[0].offsetWidth)) - 1;
    let position = parseInt(container.getAttribute('data-position'));
    let percentageToMove = position*(100/numberOfSlides);
    if(position >= (numberOfSlides - maxPosition)){
      position = 0;
      percentageToMove = 0;
    }
    container.setAttribute('data-position', (position + 1));
    container.style.transform = 'translateX(-' + percentageToMove + '%)';
    if(el == 'UBPDsliderSub'){
      UBPDactiveSub(position + 1);
    }
  };

  const UBPDprevSub = (el, cl) => {
    let numberOfSlides = document.getElementsByClassName(cl).length;
    let container = document.getElementById(el);
    let maxPosition = Math.round((container.parentElement.offsetWidth / document.getElementsByClassName(cl)[0].offsetWidth)) - 1;
    let position = parseInt(container.getAttribute('data-position'));
    let percentageToMove = (position - 2) *(100/numberOfSlides);
    if(position <= 1){
      position = (numberOfSlides - maxPosition) + 1;
      percentageToMove = ((numberOfSlides - maxPosition) - 1) *(100/numberOfSlides);
    }
    container.setAttribute('data-position', (position - 1));
    container.style.transform = 'translateX(-' + percentageToMove + '%)';
    if(el == 'UBPDsliderSub'){
      UBPDactiveSub(position - 1);
    }
  };

  const UBPDgotoSub = (el, cl, num) => {
    if(UBPDinterval){
      clearInterval(UBPDinterval);
      UBPDinterval = false;
    }
    let numberOfSlides = document.getElementsByClassName(cl).length;
    let container = document.getElementById(el);
    let position = num;
    let percentageToMove = (position - 1) *(100/numberOfSlides);
    container.setAttribute('data-position', position);
    container.style.transform = 'translateX(-' + percentageToMove + '%)';
    if(el == 'UBPDsliderSub'){
      UBPDactiveSub(num);
    }
  };

//Activa el punto del segundo slider
const UBPDactiveSub = (num) =>{
  let dots = document.getElementsByClassName("UBPDSlider-buttons-dots-element");
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  dots[num - 1].classList.add('active');
}