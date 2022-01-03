
/**
 * AGE calcutator
 * @param {*} name 
 * @param {*} year 
 * @returns 
 */


function agecal(name , year){
  
    let date = new Date();
    age = date.getFullYear() - year;

    let ageStarus = checkAgeStatus(age);
    return `<p class="alert alert-${ageStarus.starus}"> Hi ${name} , you are ${age} years old and You are ${ageStarus.name}</p>`;

}

 /**
 * Age of marriage calcutator
 * @param {*} name 
 * @param {*} year 
 * @returns 
 */


  function marriageagecal(name , year , Gender){
  
    let date = new Date();
    age = date.getFullYear() - year;

    let ageStarus = marriageCheckAgeStatus(age);
    return `<p class="alert alert-${ageStarus.starus}"> Hi ${name} , you are ${age} years old.. ${ageStarus.biyersomoi} & you are a ${Gender}</p>`;

}


/**
 * test babu,kishur,jubok,birdho
 * @param {*} age 
 * @returns 
 */

function checkAgeStatus (age){

 if(age > 0 && age < 10){

    return {
        name : 'Babu',
        starus : 'success'
    };
 }else if(age >= 10 && age < 18){
   
    return {
        name : 'Kishur',
        starus : 'info'
    };
 }else if(age >= 18 && age < 35){
   
    return {
        name : 'tokboke jubok',
        starus : 'warning'
    };
 }else if(age >= 35 && age < 55){
   
    return {
        name : 'halka boyosko',
        starus : 'primary'
    };
 }else if(age >= 55 && age < 150){
   
    return {
        name : 'normore birdho',
        starus : 'danger'
    };
 }else 
   
    return {
        name : 'jin',
        starus : 'dark'
    };
 };


/**
 * test biyer boyos
 *
 * @param {*} age 
 * @returns 
 */

function marriageCheckAgeStatus (age){

 if(age > 0 && age < 18){

    return {
        biyersomoi : 'tomar ekhono biyer boyos hoi ni..',
        starus : 'warning'
    };
 }else if(age >= 18 && age < 28){
   
    return {
        biyersomoi : 'tomar biyer boyos hoiyeche ..tomar family ke bolo tomar jonno bwo kujte..',
        starus : 'success'
    };
 }else if(age >= 28 && age < 35){
   
    return {
        biyersomoi : 'vai apni ekhono biye korchen na keno ? apnar to biyer boyos ses hoiye jasse..tara tari biye koren',
        starus : 'warning'
    };
 }else if(age >= 35 && age < 55){
   
    return {
        biyersomoi : 'ankel ki bepar ? meye kuje pan nai naki ? apnar to biyer boyos sole gese..',
        starus : 'primary'
    };
 }else if(age >= 55 && age < 150){
   
    return {
        biyersomoi : 'apni biyer sopno bule jan..apnar kopale biye nai..',
        starus : 'danger'
    };
 }else 
   
    return {
        biyersomoi : 'sorry...',
        starus : 'dark'
    };
 };
 

/**
 * Currency convert
 * @param {*} amount 
 * @param {*} currency 
 * @returns 
 */
 function cc_cal(amount, currency){

    if(currency == 85){
        return amount * 85
    }
    else if(currency == 67){
        return amount * 67
    }
    else if(currency == 91){
        return amount * 91
    }
    else if(currency == 104){
        return amount * 104
    }else{
        return ``
    }
};

/**
 * check Input function
 */

 function checkInput (){

    const userValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const password2Value = password2.value;
    let patternEmail = /^[a-z0-9\._]*@[a-z0-9]*\.[a-z]{3}$/;

    
    if (userValue === '') {

         errorFor(username, 'Username Not be Blank');

    } else {
         successFor(username);
    };

    
    if (emailValue === '') {

         errorFor(email, 'email Not be Blank');

    } else if (patternEmail.test(emailValue) == false) {

         errorFor(email, 'Email is not Valid');

    }else{
         successFor(email);
    };

    
    if (passwordValue === '') {

         errorFor(password, 'Password Not be Blank');

    } else {
         successFor(password);
    };
    if (password2Value !== passwordValue) {

         errorFor(password2, 'Password Check Not Matched');

    } else if (password2Value === ''){

         errorFor(password2, 'Password Check Not Matched');


    }else{
         successFor(password2);
    };

};

/**
* error message and class adding
* @param {*} input 
* @param {*} message 
*/
function errorFor(input, message) {

const formGroup = input.parentElement; /**.form-group */
const samall = formGroup.querySelector('small');

formGroup.classList.add('errors');      /** add class message */ 
samall.innerText = message;      /** errors message */ 



}

/**
* Success Class adding 
* @param {*} vale 
*/
function successFor(vale) {

/** success class adding */ 
const formGroup = vale.parentElement;
formGroup.classList.add('success');

}





