let ready = window.prompt(`Are you ready to play? (y/n)`);

let user_score = 0;
let bot_score = 0;
while (ready == `y` || ready == `Y`) {

    let rand_num = Math.random();
    let bot;
    if (rand_num > 0.66) {
        bot = 0; // 0 = paper
    } else if (rand_num < 0.33) {
        bot = 1;  // 1 = rock
    } else {
        bot = 2; // 2 = scissor
    }
    
    let user_input = window.prompt(`Enter your choose: `);
    if (user_input == `Rock` || user_input == `rock` || user_input == `paper` || user_input == `Paper` || user_input == `Scissor` || user_input == `scissor`) {
        if (bot == 0) {
            if (user_input == `Scissor` || user_input == `scissor`) {
                user_score++;
                alert(`You win !!  Lucky guy. this is your ${user_score} time win.`);
            } else if (user_input == `Rock` || user_input == `rock`) {
                bot_score++;
                alert(`Haha, You lose. This is my ${bot_score} times win.`);
            } else {
                alert(`It is tie.`);
            }
        }
        else if (bot == 1) {
            if (user_input == `paper` || user_input == `Paper`) {
                user_score++;
                alert(`You win !!  Lucky guy. this is your ${user_score} time win.`);
            } else if (user_input == `Scissor` || user_input == `scissor`) {
                bot_score++;
                alert(`Haha, You lose. This is my ${bot_score} times win.`);
            } else {
                alert(`It is tie.`);
            }
        }
        else if (bot == 2) {
            if (user_input == `Rock` || user_input == `rock`) {
                user_score++;
                alert(`You win !!  Lucky guy. this is your ${user_score} time win.`);
            } else if (user_input == `paper` || user_input == `Paper`) {
                bot_score++;
                alert(`Haha, You lose. This is my ${bot_score} times win. `);
            } else {
                alert(`It is tie.`);
            }
        }
    } else {
        alert(`You need enter the right choice! foo`);
        ready = prompt(`Do you still want play? bro. (enter 'n' to quit, 'y' to continuos)`);
    }
}
if (user_score < bot_score) {
    alert(`Ok, foo. You quit on me huh?, I won you (${bot_score} : ${user_score}). You suck!`);
} else if (user_score > bot_score) {
    alert(`GG, brother. You are not to bad, You won me (${user_score} : ${bot_score}). I will beat you next time. `);
} else {
    alert(`Alright bro, this is fair game. I did my best, you did yours. No one lose. Respect!`)
}