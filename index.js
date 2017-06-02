/**
 * Created by DerrowR on 6/2/2017.
 */
var date = new Date();
var DerrowArray = ["Jennifer Derrow", "Timothy Derrow", "Robbie Derrow", "Lara Derrow", "Zach Derrow", "Lacey Derrow"];
var LaCourArray = ["Kimber LaCour","Christalin LaCour","Allen LaCour"];
var Drake_BurnsArray = ["David Drake","Nola Burns","Grace Burns","Christalyn Burns"];
console.log(date.getFullYear());

function buildTable() {
    self.assignGiftGiverAndReceiver(DerrowArray, LaCourArray, Drake_BurnsArray)
}

function randomizeFamilyMembers() {
    
}

function assignGiftGiverAndReceiver(array1, array2, array3) {
    console.log("assigning gift givers and receivers...");

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