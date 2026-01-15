function updateFields() {
    let psychometricInput = document.getElementById('psychometric');
    let mechinaInput = document.getElementById('mechina');
    let selectedTrack = document.querySelector('input[name="track"]:checked');

    if (selectedTrack.value === 'psychometric') {
        psychometricInput.disabled = false; // מאפשר כתיבה בפסיכומטרי
        mechinaInput.disabled = true;      //  נועל את השדה של מכינה
        mechinaInput.value = '';           // מאפס את השדה של מכינה
    } 
    else if (selectedTrack.value === 'mechina') {
        psychometricInput.disabled = true;  // נועל את השדה של פסיכומטרי
        mechinaInput.disabled = false;     // מאפשר כתיבה במכינה
        psychometricInput.value = '';      // מאפס את השדה של פסיכומטרי
    }
}

function validate() {
    let bagrutGrade = document.getElementById('bagrut').value;
    let ageValue = parseInt(document.getElementById('age').value);
    if (bagrutGrade === "") {
    alert("You should enter a bagrut grade");
    }
    if (ageValue > 30) {
        document.getElementsByClassName('green')[0].innerHTML = "<p>You are eligible for admission to any faculty you choose</p>"
        }
    else if (ageValue <= 30) {
        document.getElementsByClassName('green')[0].innerHTML = "<p></p>"
    }
        /* returns false to prevent the form from submitting and the page from reloading,
           so the green message stays on screen and the form is not reset.
           This works because in this taks we're not actually sending the data anywhere.
           If we want different behavior, we can use onclick instead of onsubmit. */
    return false;
    
}


