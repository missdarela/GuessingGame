 let user = prompt("Enter Your Username");
 console.log("Hi "+user+"!!")
 let points = 0;
 let range;
 let pointsWord = "point"
        function game(range){
            for (let i=2; i<=8; i++){
                range = Math.floor(Math.random()*i)+1;
                let userInput = parseInt(prompt("Guess a number between 1 "+"and "+i));   
                if (userInput==range && i==2){
                    points = points + 1;
                    console.log("Yayy!! You got it right, you just earned "
                               + points +" "+ pointsWord);
                }
                else if(userInput==range){
                    points = points + 1;
                    pointsWord="points";
                    console.log("Yayy!! You got it right, you just earned "
                               + points +" "+ pointsWord);
                }
                else  {
                    console.log("Sorry, better luck next time");
                    console.log("The number was "+ range );
                    return 0;
                }
                
            }
        }

game(range)


