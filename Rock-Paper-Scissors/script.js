function myfunction() {
    var user = prompt('Choose rock, paper or scissors')
    var computer, ran
    var ran = Math.floor(Math.random() * 3)
    if (ran == 1) {
        computer = 'rock'
    } else if (ran == 2) {
        computer = 'paper'
    } else {
        computer = 'scissors'
    }
    game(computer, user)
}

function game(computer, user) {
    var results
    if (computer == 'rock' & user == 'rock') {
        results = 'draw'
    } else if (computer == 'rock' & user == 'paper') {
        results = 'win'
    } else if (computer == 'rock' & user == 'scissors')
        results = 'lose'
    if (computer == 'paper' & user == 'rock') {
        results = 'lose'
    } else if (computer == 'paper' & user == 'paper') {
        results = 'draw'
    } else if (computer == 'paper' & user == 'scissors')
        results = 'win'
    if (computer == 'scissors' & user == 'rock') {
        results = 'win'
    } else if (computer == 'scissors' & user == 'paper') {
        results = 'lose'
    } else {
        results = 'draw'
    }
    if (results == 'win') {
        alert('You ' + results + " Nice! Use this at Checkout for 10% off!!: Gritty10")
    } else {
        alert('Gritty chose ' + computer + " Sorry! no discount code")
    }
}