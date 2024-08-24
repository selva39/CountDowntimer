let timer;
let totalTime;
 var message=document.getElementById("message");
 var display=document.getElementById('displayTimer');
document.getElementById('startTimer').addEventListener('click',startTimer);
document.getElementById('resetTimer').addEventListener('click',resetTimer);
function startTimer(){debugger
    var showTimer= document.getElementById('getTimer').value;
    totalTime=parseInt(showTimer);

    if(isNaN(totalTime) || showTimer.trim()===""){
        message.textContent="please enter a valid number";
        return;
    }
    message.textContent="";
   timer= setInterval(updateTimer,'1000');

}
function updateTimer(){
    var minutes= Math.floor(totalTime/60);
    var second =totalTime%60;
    display.textContent=`${minutes.toString().padStart(2,'0')}:${second.toString().padStart(2,'0')}`;
    if(totalTime===0){
        clearInterval(timer);
            message.textContent="times up....";
    }
    else{
        totalTime--;
    }

}
function resetTimer(){
    clearInterval(timer);
    display.textContent="00:00";
    message.textContent='';
    document.getElementById('getTimer').value ="";
}