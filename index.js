/**
 * Created by DerrowR on 6/2/2017.
 */
var date = new Date();
var DerrowArray = ["Jennifer Derrow", "Timothy Derrow", "Robbie Derrow", "Lara Derrow", "Zach Derrow", "Lacey Derrow"];
var LaCourArray = ["Kimber LaCour","Christalin LaCour","Allen LaCour"];
var Drake_BurnsArray = ["David Drake","Nola Burns","Grace Burns","Christalyn Burns"];
var shuffledArray1 = [];
var shuffledArray2 = [];
var shuffledArray3 = [];
var assignedGiftGiverAndReceiverArray = [];
console.log(date.getFullYear());

function buildTable() {
    randomizeFamilyMembers(DerrowArray, LaCourArray, Drake_BurnsArray);
}

function randomizeFamilyMembers(array1, array2, array3) {
    var randomNumber = Math.floor(Math.random() * 9);

    switch (randomNumber) {
        case 0:
            shuffledArray1 = reverseArray(array1);
            shuffledArray2 = reverseArray(array2);
            shuffledArray3 = reverseArray(array3);
            break;
        case 1:
            shuffledArray1 = shuffleArray(array1);
            shuffledArray2 = reverseArray(array2);
            shuffledArray3 = reverseArray(array3);
            break;
        case 2:
            shuffledArray1 = shuffleArray(array1);
            shuffledArray2 = shuffleArray(array2);
            shuffledArray3 = reverseArray(array3);
            break;
        case 3:
            shuffledArray1 = shuffleArray(array1);
            shuffledArray2 = shuffleArray(array2);
            shuffledArray3 = shuffleArray(array3);
            break;
        case 4:
            shuffledArray1 = shuffleArray(array1);
            shuffledArray2 = reverseArray(array2);
            shuffledArray3 = shuffleArray(array3);
            break;
        case 5:
            shuffledArray1 = reverseArray(array1);
            shuffledArray2 = shuffleArray(array2);
            shuffledArray3 = reverseArray(array3);
            break;
        case 6:
            shuffledArray1 = reverseArray(array1);
            shuffledArray2 = shuffleArray(array2);
            shuffledArray3 = shuffleArray(array3);
            break;
        default:
            shuffledArray1 = reverseArray(array1);
            shuffledArray2 = reverseArray(array2);
            shuffledArray3 = shuffleArray(array3);
            break;
    }

    assignGiftGiverAndReceiver(shuffledArray1,shuffledArray2,shuffledArray3);
}

function assignGiftGiverAndReceiver(array1, array2, array3) {
    console.log("assigning gift givers and receivers...");
    console.log(array1);
    console.log(array2);
    console.log(array3);
}

function shuffleArray(array) {
    if (array.length > 2) {
        var random = Math.floor(Math.random() * (array.length));
        var random2 = Math.floor(Math.random() * (array.length));
        var nameHolder = "";
        if (array.length === 3) {
            nameHolder = array[1];
            array[1] = array[2];
            array[2] = nameHolder;
            nameHolder = "";
        }
        if (array.length > 3) {
            random = Math.floor(Math.random() * (array.length));
            random2 = Math.floor(Math.random() * (array.length));
            nameHolder = array[random];
            array[random] = array[random2];
            array[random2] = nameHolder;
            nameHolder = "";
        }
        if (array.length > 5) {
            random = Math.floor(Math.random() * (array.length));
            random2 = Math.floor(Math.random() * (array.length));
            nameHolder = array[random];
            array[random] = array[random2];
            array[random2] = nameHolder;
            nameHolder = array[0];
            array[0] = array[4];
            array[4] = nameHolder;
            nameHolder = "";
        }
    } else {
        reverseArray(array);
    }

    return array;
}

function reverseArray(array) {
    var i = 0;
    var j = array.length - 1;
    var nameHolder = "";
    while (i < j) {
        nameHolder = array[i];
        array[i] = array[j];
        array[j] = nameHolder;
        i++;
        j--;
    }
    return array;
}

function addPersonToArray() {
    var firstName = document.getElementById("formFirstName").value;
    var lastName = document.getElementById("formLastName").value;
    if (document.getElementById("radioDerrow").checked === true && firstName !== "" && lastName !== "") {
        DerrowArray.push(firstName + " " + lastName);
    } else if (document.getElementById("radioLaCour").checked === true && firstName !== "" && lastName !== "") {
        LaCourArray.push(firstName + " " + lastName);
    } else if (document.getElementById("radioDrakeBurns") && firstName !== "" && lastName !== ""){
        Drake_BurnsArray.push(firstName + " " + lastName);
    } else {
        document.getElementById("modalDiv").style.display='block'
    }
    //Clear the form
    document.getElementById("formFirstName").value = "";
    document.getElementById("formLastName").value = "";
    document.getElementById("radioDerrow").checked = false;
    document.getElementById("radioLaCour").checked = false;
    document.getElementById("radioDrakeBurns").checked = false;
    console.log(DerrowArray);
    console.log(LaCourArray);
    console.log(Drake_BurnsArray);
}