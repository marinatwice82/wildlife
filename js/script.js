let nextBtn = document.querySelector('.arrow_left');

let previousBtn = document.querySelector('.arrow_right');

let slider =  document.querySelector('.slider');

let array = [];
let str="";
    str +=`<div class="slider_deer">`;
    str+=`<p class="slider_title">Deer</p>`;
    str+=`<p class="slider_text">Naturalist investigation</p>`;
    str+=`</div>`;
    array.push(str);
    str = '';
    str +=`<div class="slider_squirrel">`;
    str+=`<p class="slider_title">Squirrel</p>`;
    str+=`<p class="slider_text">Kamikaze squirrels</p>`;
    str+=`</div>`;
    array.push(str);
    str='';
    str +=`<div class="slider_bird">`;
    str+=`<p class="slider_title">Bird</p>`;
    str+=`<p class="slider_text">Birds Fight club</p>`;
    str+=`</div>`;
    array.push(str);

    slider.innerHTML+=array[0]+array[1]+array[2];

    function left(){
        slider.innerHTM = '';
        temp = array[0];
        array[0] = array[1];
        array[1] = array[2];
        array[2] = temp;
        slider.innerHTML=array[0]+array[1]+array[2];

    }

    function right(){
        slider.innerHTM = '';
        temp = array[2];
        array[2] = array[1];
        array[1] = array[0];
        array[0] = temp;
                
        slider.innerHTML=array[0]+array[1]+array[2];
    }



