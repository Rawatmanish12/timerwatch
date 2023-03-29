var display=document.getElementById('display');

let timerId=null;

//es5
// let hour=0
// let mint=0
// let second=0;

//es6

let [hour,min,second]=[0,0,0];

function stopWatch() {
    second ++;
    if (second === 60) {
        second = 0;
        min ++;
        if (min===60) {
         min=0
         hour ++;
        }
    } 
   let h=hour < 10 ? "0"+hour:hour;
   let m=min < 10 ? "0"+min:min;
   let s=second < 10 ? "0"+second:second;




//    if (hour < 10) {
//      hour = "0"+hour
//    }
//    else
//    {
//     hour=hour
//    }

 display.innerHTML=h +":"+m+":"+s; 
 }

function start() {
   if(timerId !=null)
   {
    clearInterval(timerId)
   }
timerId=setInterval(stopWatch,10)


}

function stop() {
    clearInterval(timerId)
}
function rest() {
    clearInterval(timerId);
    let [hour,min,second]=[0,0,0];

    display.innerHTML="00 : 00 : 00"

}