import {favItems} from '../../data/fav.js'

export function totalFavItemCount() {
    let favIitemTotal = 0;
    favItems.forEach((favItem) => {
        favIitemTotal += favItem.chosen;
    });
    return favIitemTotal
}
