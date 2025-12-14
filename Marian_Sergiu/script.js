const titlu = document.getElementById('titlu-resurse');
const lista = document.getElementById('lista-resurse');

function transformaInSlideshow() {
  
    if (lista.classList.contains('slideshow-activ')) return;
   
    lista.classList.add('slideshow-activ');
    titlu.classList.add('titlu-centrat');
    const elemente = lista.querySelectorAll('li');
    let indexCurent = 0;

   
    elemente.forEach((el, index) => {
        if (el.classList.contains('active')) {
            indexCurent = index;
        }
    });


    setInterval(() => {
   
        elemente[indexCurent].classList.remove('active');

       
        indexCurent++;
        if (indexCurent >= elemente.length) {
            indexCurent = 0;
        }


        elemente[indexCurent].classList.add('active');

    }, 3000); 
}


titlu.addEventListener('dblclick', transformaInSlideshow);