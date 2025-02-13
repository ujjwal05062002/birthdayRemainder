var day = document.getElementById("days")
      var hour = document.getElementById("hours")
      var minute = document.getElementById("minutes")
      var second = document.getElementById("seconds")
      var heading = document.getElementById("heading")


      var center  = document.querySelector(".center")

      var targetTime =  new Date(2025,9,30)

      setInterval(()=>{
        var currentTime = new Date()

        var diff = targetTime - currentTime


        if (diff > 0){
          let num  = parseInt(diff/(1000*60*60*24))
          if (num<10){
            day.innerHTML = `0${num}`
          }
          else{
            day.innerHTML  = num
          }

          num = parseInt(diff%(1000*60*60*24)/(1000*60*60))
          if (num<10){
            hour.innerHTML = `0${num}`
          }
          else{
            hour.innerHTML  = num
          }


          num = parseInt(diff%(1000*60*60)/(1000*60))
          if (num<10){
            minute.innerHTML = `0${num}`
          }
          else{
            minute.innerHTML  = num
          } 

          num = parseInt(diff%(1000*60)/(1000))
          if (num<10){
            second.innerHTML = `0${num}`
          }
          else{
            second.innerHTML  = num
          } 
        }
        else{

        }
      },1000)