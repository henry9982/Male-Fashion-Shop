import {accountInfos} from '../data/singup-data.js';

const buttons = document.querySelectorAll('.login-btn')
buttons.forEach(btn =>{
    btn.addEventListener('click',(e)=>{
        let x = e.clientX - e.target.offsetLeft
        let y = e.clientY - e.target.offsetTop
        
        let ripples = document.createElement('span')
        ripples.classList.add('ripple')
        ripples.style.left = x + 'px'
        ripples.style.top = y + 'px'
        btn.appendChild(ripples)
        setTimeout(()=>{
            ripples.remove()
        },1000)
    })
})

const emailInputTag = document.querySelector('.email-input')
const passwordInputTag = document.querySelector('.password-input')
const fillOutFormMessage = document.querySelector('.fill-out-form-error')
const emailErrorMessage = document.querySelector('.email-error')

const emailMessage = document.querySelector('.email-message')
const homepageClick = document.querySelector('.homepage-click')

const loginBtn = document.querySelector('.login-btn')

let setTimeoutId1
let setTimeoutId2
let setTimeoutId3


loginBtn.addEventListener('click',()=>{

    if (!emailInputTag.value || !passwordInputTag.value) {
        clearTimeout(setTimeoutId1)
        emailMessage.innerHTML=" Please fill out the form first"
        fillOutFormMessage.classList.add('show-error')
        setTimeoutId1=setTimeout(() => {
            fillOutFormMessage.classList.remove('show-error')
        }, 2000);
        return
    }

    if (!emailInputTag.value.includes("@gmail.com")) {
        clearTimeout(setTimeoutId2)
        emailErrorMessage.classList.add('show-error')
        setTimeoutId2=setTimeout(() => {
            emailErrorMessage.classList.remove('show-error')
        }, 2000);
        return
    }

    let matching

    accountInfos.forEach((accinfo)=>{
        if (accinfo.email===emailInputTag.value && accinfo.password===passwordInputTag.value) {
            matching=accinfo
        }
    })
    if (matching) {
        homepageClick.click()
    }else{
        clearTimeout(setTimeoutId3)
        emailMessage.innerHTML="Account not found"
        fillOutFormMessage.classList.add('show-error')
        setTimeoutId3=setTimeout(() => {
            fillOutFormMessage.classList.remove('show-error')
        }, 2000);
        return
    }
})