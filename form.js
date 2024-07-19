/*-------------------DOM----------------------*/
// console.log(window);
//-----> this gives us all the parents objects of the browser
// window.alert(1)

/// Single Element ///
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

/// Multi Element ///
//----> this gives us node list
// console.log(document.querySelectorAll('.item'));
//----> this gives us htmlcollection in array form
// console.log(document.getElementsByClassName('item'));
// const items = document.querySelectorAll('.item');
// items.forEach((item)=> console.log(item));
// const ul = document.querySelector('.items');
// // ul.remove()
// // ul.lastElementChild.remove();  
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].textContent = 'Mudasar';
// ul.lastElementChild.innerHTML = 
// '<h1>Zahid</h1>';

 // Now change style //
//  const btn = document.querySelector('.btn');
//  btn.addEventListener('click', (e)=> {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//  })
// const btn = document.querySelector('.btn');
// btn.addEventListener('mouseover', (e)=> {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//  })
// const btn = document.querySelector('.btn');
// btn.addEventListener('mouseout', (e)=> {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//  })

///-------------------Main work -----------

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const usersList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter All Fields';
        setTimeout(()=> msg.remove(), 3000);
    }else{
        // console.log('successfull')
        // // msg.classList.remove('error')
        // // msg.remove();
        // // msg.innerHTML = '';
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        usersList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }
}

