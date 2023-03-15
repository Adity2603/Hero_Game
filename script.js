score = 0;
cross = true;
over = false

document.addEventListener("keydown", function (e) {
    console.log(e.keyCode);
    if (e.keyCode == 38 || e.keyCode == 32) {
        hero = document.querySelector('.hero')
        hero.classList.add('animateHero')
        setTimeout(() => {
            hero.classList.remove('animateHero')
        }, 700);

    }
    else if (e.keyCode == 39) {
        hero = document.querySelector('.hero')
        heroX = parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'))
        moveL = heroX + 112
        if (moveL > 1300) {
            hero.style.left = "92vw"
        }
        else {
            hero.style.left = moveL + "px"
            console.log("MOveL is ", moveL)
        }

    }
    else if (e.keyCode == 37) {
        hero = document.querySelector('.hero')
        heroX = parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'))
        moveR = heroX - 112
        if (moveR < -20) {
            hero.style.left = -20 + "px"
        }

        else {


            hero.style.left = moveR + "px"
            console.log("Move-R ", moveR)
            tyle.left = "-82px"

        }

    }

});



setInterval(() => {

    hero = document.querySelector('.hero')
    gameOver = document.querySelector('.GameOver')
    Survive = document.querySelector('.Survive')

    obstacle = document.querySelector('.obstacle')

    dx = parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(hero, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetx = Math.abs(dx - ox)
    offsety = Math.abs(dy - oy)
    console.log(offsetx, offsety)

    if (offsetx < 110 && offsety < 100) {
        gameOver.style.visibility = 'visible'
        Survive.style.visibility = 'hidden'

        obstacle.classList.remove('obstacleAni')
        over = true
        
    }

    else if (offsetx < 145 && cross) {
        if (!over) {
            score = score + 1
        }
        console.log("Score = ", score)

        updateScore(score)
        cross = false
        setTimeout(() => {
            cross = true
        }, 1000);
    }


    

}, 100);

function updateScore(score) {
    ScoreCont.innerHTML = "Your Score : " + score
    
}
