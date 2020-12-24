function topGame() {
    round++;
    document.getElementById("round").innerHTML = `Раунд: ${round}`;

    let time_for_round = Math.floor(Math.random() * (2000 - 750 + 1) + 500);
    let items_in_round = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    let items_for_round = fillRound(game_items, items_in_round);

    for (let j = 0; j < items_for_round.length; j++) {
        let item = document.getElementById(items_for_round[j])
        item.src = "img/full_health.png?random";
        item.style.pointerEvents = "auto";
        item.addEventListener('click', criticalHit, {once: true})
    }

    setTimeout(clearField, time_for_round)
    setTimeout(topGame, time_for_round + 2000)

}

function clearField() {
    for (let i = 0; i < game_items.length; i++) {
        let item = document.getElementById(game_items[i])
        item.src = "img/empty_hole.png?random";
        item.style.pointerEvents = "none";
    }
}

function criticalHit() {
    this.src = "img/critical_hit.png";
    score++;
    document.getElementById("score").innerHTML = `Поймано ♂кротов♂: ${score}`;
}

function fillRound(arr, n) {
    let result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    while (n--) {
        const x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

let score = 0;
let round = 0;
let game_items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];

window.onload = function () {
    topGame()
}
