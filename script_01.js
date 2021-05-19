// Entscheidungsstrukturen | control structures


//Deklaration
/*
let ageJohn, ageMark;
let isJohnOlder, isJohnEqual;

// wertzuweisung
ageJohn = 45;
ageMark = 45;

// Logische Aussagen / test/'s

isJohnOlder = (ageJohn > ageMark);
isJohnEqual = ( ageJohn == ageMark);
// Deklaration
let ageJohn, ageMark;
let isJohnOlder, isJohnEqual;

// Wertzuweisung
ageJohn = 40;
ageMark = 30;

//Logische Aussagen/ Test(s)
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);
*/

// Ausgabe
//console.log("isJohnOlder: " + isJohnOlder);
//console.log("isJohnEqual: " + isJohnEqual);

/**********      IF    ***********/
/*
// alternativlos ( TINA )

//if (false)
//if (isJohnOlder)
//if (ageJohn > ageMark)
//if (30 > 25)
/************ IF  ************/
// alternativlos (TINA)
// entweder JA oder nix ...

/*
//if (true)
if (isJohnOlder)
//if (ageJohn > ageMark)
//if (35 > 30)
>>>>>>> aec968956d52a21f7af9a32863107683d5ef9427
{
    console.log("John ist älter");
}
*/

/*
/**********     Else   ***********/
//   mit alternative ( ja oder nein )
/*
if (isJohnOlder)
{
    // JA-Zweig / true
/************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein

/*
if (isJohnOlder)
{
    // Ja-Zweig / true
>>>>>>> aec968956d52a21f7af9a32863107683d5ef9427
    console.log("John ist älter");
}
else
{
    // Nein-Zweig / false
    console.log("John ist jünger");
}
*/
/***** IF - ELSE IF  *****/
// mit Alternativen Fällen ( älter, jünger, gleich alt)
/*
if (isJohnOlder)
{
    // JA-Zweig / true
    console.log("John ist älter");
}

else if (isJohnEqual)
{
    // 1. Alternative / false
    console.log("John ist gleich alt ");

}
//ggf. weitere Alternativen
//else if (...)
else
{
    // letzte Alternative / false
    console.log("John ist jünger");
}
*/


/*
/************ IF - ELSE IF  ************/
// mit Alternativen Fällen (älter,jünger,gleich alt)
/*
if (isJohnOlder) // ageJohn > ageMark
{
    // Ja-Zweig / true
    console.log("John ist älter");
}
// 1. Alternative
else if (isJohnEqual) // ageJohn == ageMark
{
    // 1. Alternative / false
   console.log("John ist gleich alt");
}
// ggf. weiter Alternativen
// else if (...)
else
{
    // letze Alternative / false
    console.log("John ist jünger");
}
*/
/** Fallunterscheidung  / case | switch 1 ***/

/*
let firstName, job;
firstName = "Jane"; 
job = "driver"; // .. fährt TAXI!
job = "diver"; // .. taucht im Rhein!
job = "pilot";
job = "artist"; //.. malt ein Bild 
job = "teacher"; // .. unterrichtet 20 Schüler!
job = "instructor"; // .. unterrichtet 20 Schüler!

switch (job) {
    case "driver":
        console.log(firstName + " fährt TAXI!");
        break;
    case "diver":
        console.log(firstName + " taucht im Rhein!");
        break;
    case "artist":
        console.log(firstName + " malt ein Bild!");
        break;
    case "teacher":
    case "instructor":
        console.log(firstName + " unterrichtet 20 Schüler!");
        break;

// für alle nicht bezeichneten Fälle
    default:
        console.log(firstName + " mach etwas anderes!");
        break;
}  

*/
/**** fallunterscheidung / case|switch 2 ****/

let a = 2;

switch (true) {
    case (a == 1):
        console.log("a ist 1");
        break;
    case (a == 2):
        console.log("a ist 2");
        break;

    default:
        console.log(" a hat einen anderen Wert!")
        break;
}




















