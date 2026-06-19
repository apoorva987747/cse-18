 function checkCharacter() {

           
            let ch = document.getElementById("char").value.toLowerCase();

          
            if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {

                document.getElementById("result").innerHTML =
                    ch + " is a Vowel";
            }

        
            else if (ch >= 'a' && ch <= 'z') {

                document.getElementById("result").innerHTML =
                    ch + " is a Consonant";
            }

        
            else {

                document.getElementById("result").innerHTML =
                    "Please enter a valid alphabet.";
            }
        }