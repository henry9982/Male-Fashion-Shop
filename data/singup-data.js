export let accountInfos = JSON.parse(localStorage.getItem('account-infos'))
if (!accountInfos) {
    accountInfos=[]
}
saveToStorage()

export function saveToStorage() {
    localStorage.setItem('account-infos',JSON.stringify(accountInfos))
  }