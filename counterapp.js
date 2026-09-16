 let count=0
        let countEl=document.getElementById("count-el")
     function increment(){
        count=count+1
        countEl.innerText=count

     }

     let affichEl=document.getElementById("affiche")

      function save(){
      affichEl.textContent+=count+" - "
      count=0
      countEl.innerText=0
      }

       function clean(){
        count=0
        countEl.innerText=count
       }

