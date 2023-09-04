import {accountInfos,saveToStorage} from '../data/singup-data.js';

const singupBtn = document.querySelector('.singup-btn')
const userNameTag = document.querySelector('.user-name-input')
const emailTag = document.querySelector('.email-input')
const passwordTag = document.querySelector('.password-input')
const confirmPasswordTag = document.querySelector('.confirm-password-input')

const emailErrorMessage = document.querySelector('.email-error')
const confirmErrorMessage = document.querySelector('.confirm-error')

const emailMessage = document.querySelector('.email-message')
const fillOutMessage = document.querySelector('.fill-out-form-error')

const homeClick = document.querySelector('.home-click')

let setTimeoutId1
let setTimeoutId2
let setTimeoutId3
let setTimeoutId4
let setTimeoutId5


singupBtn.addEventListener('click',()=>{
    let userName = userNameTag.value
    let email = emailTag.value
    let password = passwordTag.value
    let confirmPassword = confirmPasswordTag.value

    if (!userName || !email || !password || !confirmPassword) {
        clearTimeout(setTimeoutId1)
        fillOutMessage.classList.add('show-error')
        setTimeoutId1=setTimeout(() => {
            fillOutMessage.classList.remove('show-error')
        }, 2000);
        return
    }

    if (!email.includes('@gmail.com')) {
        clearTimeout(setTimeoutId2)
        emailMessage.innerHTML="Invalid Email"
        emailErrorMessage.classList.add('show-error')
        setTimeoutId2=setTimeout(() => {
            emailErrorMessage.classList.remove('show-error')
        }, 2000);
        return
    }

    accountInfos.forEach(accinfo => {
        if (email === accinfo.email) {
            clearTimeout(setTimeoutId3)
            emailMessage.innerHTML="Email Already in Use"
            emailErrorMessage.classList.add('show-error')
            setTimeoutId3=setTimeout(() => {
                emailErrorMessage.classList.remove('show-error')
            }, 2000);
            return
        }
    });
    if (password !== confirmPassword) {
        clearTimeout(setTimeoutId4)
        confirmErrorMessage.classList.add('show-error')
        setTimeoutId4=setTimeout(() => {
            confirmErrorMessage.classList.remove('show-error')
        }, 2000);
        return
    }

    const infoObject = {
        email,
        password
    }
    let matching
    accountInfos.forEach(accinfo => {
        if (emailTag.value === accinfo.email) {
           matching = accinfo
        }
    });
    if (matching) {
        clearTimeout(setTimeoutId5)
        emailMessage.innerHTML="Email Already in Use"
        emailErrorMessage.classList.add('show-error')
        setTimeoutId5=setTimeout(() => {
            emailErrorMessage.classList.remove('show-error')
        }, 2000);
        return
    }else{
        accountInfos.push(infoObject)
    }
    saveToStorage()
    homeClick.click()
})