//AGE CALCULATOR
const check_button = document.querySelector('#agecheck');
const name = document.querySelector('#name');
const year = document.querySelector('#year');
const result = document.querySelector('#result');
//MARRIAGE CALCULATOR
const checkButton = document.querySelector('#marriageAgecheck');
const Name = document.querySelector('#Name');
const years = document.querySelector('#years');
const Gender = document.querySelector('#Gender');
const Result = document.querySelector('#Result');


//AGE CALCULATOR
check_button.addEventListener('click', () => {

    if(name.value == '' || year.value == ''){

        result.innerHTML = `<p class =" alert alert-danger"> All fields are requit</p>`

    }else{

   result.innerHTML = agecal(name.value,year.value);
   name.value = '';
   year.value = '';
 }

});


//MARRIAGE CALCULATOR
checkButton.addEventListener('click', () => {

    if(Name.value == '' || years.value == ''){

        Result.innerHTML = `<p class =" alert alert-danger"> All fields are requit</p>`

    }else{

   Result.innerHTML = marriageagecal(Name.value,years.value,Gender.value);
   Name.value = '';
   years.value = '';
 }

});

/**
 * Currency converter event
 */
 const cc_name = document.querySelector('#cc_name');
 const cc_amount = document.querySelector('#cc_amount');
 const cc_main = document.querySelector('#cc_main');
 const cc_button = document.querySelector('.cc_button');
 const cc_result = document.querySelector('.cc_result');
 cc_button.addEventListener('click', () => {
 
 
     let cc_convert = cc_amount.value * cc_main.value;
 
     cc_result.innerHTML = (cc_name.value == '' || cc_amount == '') ? `<p class = 'alert alert-danger'>All Fields are required.</p>` : `<p class = 'alert alert-success'>Hi, ${cc_name.value} your converting amount is ${cc_convert} TAKA</p>`;
     cc_result.innerHTML = (cc_name.value == '' || cc_amount == '' || cc_main.value == 'Pleace set your currency') ? `<p class = 'alert alert-danger'>All Fields are required.</p>` : `<p class = 'alert alert-success'>Hi, ${cc_name.value} your converting amount is ${cc_convert} TAKA</p>`;
 
 });

/**
 * form
 */

 const form = document.querySelector('form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const button = document.querySelector('button');


form.addEventListener ('submit', (e) => {

     e.preventDefault();

    

     checkInput();



}); 