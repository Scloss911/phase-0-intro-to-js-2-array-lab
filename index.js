
    const cats = [
        "Milo", 
        "Otis", 
        "Garfield",
        ];

        function destructivelyAppendCat(){
            cats.push("Ralph");
            return cats;
        }
        //destructive push() "Milo", "Otis", "Garfield", "Ralph"

        function destructivelyPrependCat() {
            cats.unshift("Bob");
             return cats;
        }
        // destructive unshift() "Bob", "Milo", "Otis", "Garfield"

        function destructivelyRemoveLastCat() {
            cats.pop();
            return cats;
        }
        // destructive pop "Milo", "Otis"

        function destructivelyRemoveFirstCat(){
            cats.shift();
            return cats;
        }
        // destructive shift "Otis", "Garfield"

        function appendCat(){
            const meowOne = [...cats, "Broom"];
            return meowOne;
        }

        function prependCat() {
            const meowTwo =  ["Arnold", ...cats];
            return meowTwo;
        }

        function removeLastCat(){
            const meowThree = cats.slice(0,cats.length-1)
            return meowThree;
        }
        function removeFirstCat(){
            const meowFour = cats.slice(1)
            return meowFour;
        }



      



