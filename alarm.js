        let timer=""
        setInterval(function(){
        let date=new Date()
        h1.innerHTML=`<h1>${date.getHours().toString().length==1 ? '0'+date.getHours() : date.getHours()} :
                      ${date.getMinutes().toString().length==1 ? '0'+date.getMinutes() : date.getMinutes()}:
                      ${date.getSeconds().toString().length==1 ? '0'+date.getSeconds() : date.getSeconds()} 
                      </h1>`}, 100);

                // set alarm
        function setAlarm() {
            let newDate=new Date();
            let hrs= hour.value;
            let mins=min.value;
            let secs=sec.value;
            let presentHour=newDate.getHours();
            let presentMin=newDate.getMinutes();
            let presentSec=newDate.getSeconds();
            if(hrs==presentHour && mins==presentMin && secs==presentSec){
                console.log(secs);
                console.log(newDate.getSeconds());
                alarmTimeout = setTimeout(playy(),1000)
                setReminder()
                image.classList.add('image2')
            }
          }

        //   implement audio
        let mp3 = new Audio("tone.mp3")
        function playy() {
           mp3.play();
          }

        //   stop audio
        function pausee(){
          mp3.pause();
          mp3.currentTime=0
          }
          
        function setA(){
          timer= setInterval(setAlarm,1000);
          }

        //   stop alarm
        function stopAlarm() {
          pausee();
          image.classList.remove('image2')
          }

        //   show reminder
        function setReminder() {
          reminder.innerHTML=remind.value 
          }
