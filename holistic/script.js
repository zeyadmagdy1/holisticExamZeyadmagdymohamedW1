function secondqs(){
    var username =document.getElementById('usernametxt').value;

    var ans1 =document.getElementById('ans1').checked;
    var ans2 =document.getElementById('f2').checked;
    var ans3 =document.getElementById('f3').checked;
    var ans4 =document.getElementById('f4').checked;

    if(username == ""){
        alert("plz enter your username");
    }else{
        if(ans1 ==true|| ans2 ==true|| ans3 ==true|| ans4 ==true){
            document.getElementById('question1').style.display="none";
            document.getElementById('question2').style.display="block";
        }
        else{
            alert("plz choose a answer");
        }
    }
}

function thirdqs(){

    var ans1 =document.getElementById('n1').checked;
    var ans2 =document.getElementById('ans2').checked;
    var ans3 =document.getElementById('n3').checked;
    var ans4 =document.getElementById('n4').checked;
    if(ans1 ==true|| ans2 ==true|| ans3 ==true|| ans4 ==true){
        document.getElementById('question2').style.display="none";
        document.getElementById('question3').style.display="block";
    }else{
        alert("plz choose a answer");
    }
}

function submitAndRightAnswers(){
    var username =document.getElementById('usernametxt').value;
    let counter =0;
    var ans1 =document.getElementById('ans1');
    var ans2 =document.getElementById('ans2');
    var ans3 =document.getElementById('ans3');
    if(ans1.checked){
        counter++;
    }
    if(ans2.checked){
        counter++;
    }
    if(ans3.checked){
        counter++;
    }
    var ans11 =document.getElementById('a1').checked;
    var ans22 =document.getElementById('a2').checked;
    var ans33 =document.getElementById('ans3').checked;
    var ans44 =document.getElementById('a4').checked;

    if(ans11 ==true|| ans22 ==true|| ans33 ==true|| ans44 ==true){
        var message= "Welcome "+username +" your score is : "+ counter.toString();
    alert(message);
    }else{
        alert("plz choose a answer");
    }
}