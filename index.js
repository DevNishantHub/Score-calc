let run = 0;
            let wicket = 0;

            function plusOne() {
                run += 1;
                document.getElementById("score-one").textContent = run;
            }

            function plusTwo() {
                run += 2;
                document.getElementById("score-one").textContent = run;
            }

            function plusThree() {
                run += 3;
                document.getElementById("score-one").textContent = run;
            }

            function plusFour() {
                run += 4;
                document.getElementById("score-one").textContent = run;
            }

            function plusFive() {
                run += 5;
                document.getElementById("score-one").textContent = run;
            }

            function plusSix() {
                run += 6;
                document.getElementById("score-one").textContent = run;
            }

            function addWicket() {
                wicket += 1;
                document.getElementById("wicket").textContent = wicket;
            }
            function reset(){
                wicket =0
                run=0
                document.getElementById("wicket").textContent = 0;
                document.getElementById("score-one").textContent = 0;
            }