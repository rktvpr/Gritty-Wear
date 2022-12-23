function myfunction() {
    var user = prompt('Choose rock, paper, or scissors')
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
        results = 'Gritty chose ' + computer + " Sorry! no discount code"

    } else if (computer == 'rock' & user == 'paper') {
        results = 'You ' + results + " Gritty chose " + computer + ". Nice! Use this at Checkout for 10% off!!: Gritty10"

    } else if (computer == 'rock' & user == 'scissors')
        results = 'Gritty chose ' + computer + " Sorry! no discount code"

    if (computer == 'paper' & user == 'rock') {
        results = 'Gritty chose ' + computer + " Sorry! no discount code"

    } else if (computer == 'paper' & user == 'paper') {
        results = 'Gritty chose ' + computer + " Sorry! no discount code"

    } else if (computer == 'paper' & user == 'scissors')
        results = 'You ' + results + " Gritty chose " + computer + ". Nice! Use this at Checkout for 10% off!!: Gritty10"

    if (computer == 'scissors' & user == 'rock') {
        results = 'You ' + results + " Gritty chose " + computer + ". Nice! Use this at Checkout for 10% off!!: Gritty10"

    } else if (computer == 'scissors' & user == 'paper') {
        results = 'Gritty chose ' + computer + " Sorry! no discount code"

    } else {
        results = 'Gritty chose ' + computer + " Sorry! no discount code!"
    }
    alert(results)
    // if (results == 'win') {
    //     alert('You ' + results + " Gritty chose" + computer + ". Nice! Use this at Checkout for 10% off!!: Gritty10")
    // } else {
    //     alert('Gritty chose ' + computer + " Sorry! no discount code")
    // }
}

document.querySelector("#gamebutton").addEventListener('click', function(event) {
    myfunction()
});