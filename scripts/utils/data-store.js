export function indexLocalStorage(indexToChooseProduct) {
    localStorage.setItem('indexNum',JSON.stringify(indexToChooseProduct))
}
export function trgetDate(time) {
    localStorage.setItem('remainTime',JSON.stringify(time))
}
