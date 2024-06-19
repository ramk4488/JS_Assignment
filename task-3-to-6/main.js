console.log("here to change bg color")
function changeBgColor(){
    document.body.style.background = 'red';
  }


const btn_red = document.getElementById('btn-red');
btn_red.addEventListener('click', function(){
    document.body.style.background = "red";
});

const btn_green = document.getElementById('btn-green');
btn_green.addEventListener('click', function(){
    document.body.style.background = "green";
});

const btn_white = document.getElementById('btn-white');
btn_white.addEventListener('click', function(){
    document.body.style.background = "white";
});

const btn_blue = document.getElementById('btn-blue');
btn_blue.addEventListener('click', function(){
    document.body.style.background = "blue";
});

const change_p = document.getElementById('change-p');
change_p.addEventListener('click', function(){
    const changePValue = document.getElementById('p-tag');
    changePValue.textContent = "Text Updated";
});

const change_div_content = document.getElementById('changeDivContent');
change_div_content.addEventListener('click', function(){
    const div_content = document.getElementById('main');
    div_content.innerHTML = "<p> Content Has Updated </p>";
});

