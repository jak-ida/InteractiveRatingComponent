var A = "";

function SelectRating(a){
    A = a;
    if (document.getElementById("rating-1").style.backgroundColor == 'lightgray'){
        document.getElementById("rating-1").style.backgroundColor = "hsl(213, 19%, 23%)";
        document.getElementById("rating-1").style.color = " hsl(217, 12%, 63%)";
    }
    else if (document.getElementById("rating-2").style.backgroundColor == 'lightgray'){
        document.getElementById("rating-2").style.backgroundColor = "hsl(213, 19%, 23%)";
        document.getElementById("rating-2").style.color = " hsl(217, 12%, 63%)";
    }
    else if (document.getElementById("rating-3").style.backgroundColor == 'lightgray'){
        document.getElementById("rating-3").style.backgroundColor = "hsl(213, 19%, 23%)";
        document.getElementById("rating-3").style.color = " hsl(217, 12%, 63%)";
    }
    else if (document.getElementById("rating-4").style.backgroundColor == 'lightgray'){
        document.getElementById("rating-4").style.backgroundColor = "hsl(213, 19%, 23%)";
        document.getElementById("rating-4").style.color = " hsl(217, 12%, 63%)";
    }
    else if (document.getElementById("rating-5").style.backgroundColor == 'lightgray'){
        document.getElementById("rating-5").style.backgroundColor = "hsl(213, 19%, 23%)";
        document.getElementById("rating-5").style.color = " hsl(217, 12%, 63%)";
    }

    document.getElementById("rating-" + a).style.backgroundColor = 'lightgray';
    document.getElementById("rating-" + a).style.color = "white";
}

function Submit(){
    document.getElementById('card__rating').innerHTML = A;
    document.getElementById('start').style.display = "none";
    document.getElementById('end').classList.remove('card__submitted');
    document.getElementById('end').classList.add('card__center');
}