setInterval(() => {
   
    var img = document.querySelector('#info-right > img')
    
      if(img.src.indexOf('ex1') > -1){
           img.src = 'img/ex2.jpg'
      } else if(img.src.indexOf('ex2') > -1){
           img.src = 'img/ex3.jpg'
      } else if(img.src.indexOf('ex3') > -1){
           img.src = 'img/ex1.jpg'
      }

}, 4000);