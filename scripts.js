let subhanallahCounter = document.getElementById('s-counter');
let subhanallahAdd = document.getElementById('s-add');
let totalCount = document.getElementById('total-count')

let totalCounter = 0;
let counter1 = 0;
subhanallahAdd.addEventListener('click', function(){
    counter1+=1;
    subhanallahCounter.innerText = counter1;

    totalCounter+=1;
    totalCount.innerText = totalCounter;
    
})

let counter2 = 0;
let alhamdulillahCounter = document.getElementById('a-counter');
let alhamdulillahAdd = document.getElementById('a-add');
alhamdulillahAdd.addEventListener('click', function(){
    counter2+=1;
    alhamdulillahCounter.innerText = counter2;

    totalCounter+=1;
    totalCount.innerText = totalCounter;
})

let counter3 = 0;
let allahuAkbarCounter = document.getElementById('ak-counter');
let allahuAkbarAdd = document.getElementById('ak-add');
allahuAkbarAdd.addEventListener('click', function(){
    counter3+=1;
    allahuAkbarCounter.innerText = counter3;

    totalCounter+=1;
    totalCount.innerText = totalCounter;
})