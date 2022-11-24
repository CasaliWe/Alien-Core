//Troca de foto banda
function trocaFotos(){

setInterval(() => {
   
    var img = document.querySelector('#info-right > img')
    
      if(img.src.indexOf('ex1') > -1){
           img.src = 'img/ex2.jpg'
      } else if(img.src.indexOf('ex2') > -1){
           img.src = 'img/ex3.jpg'
      } else if(img.src.indexOf('ex3') > -1){
           img.src = 'img/ex1.jpg'
      }

}, 3500);


setInterval(() => {
   
        var img = document.querySelector('#imgBandaMobile')
        
          if(img.src.indexOf('ex1') > -1){
               img.src = 'img/ex2.jpg'
          } else if(img.src.indexOf('ex2') > -1){
               img.src = 'img/ex3.jpg'
          } else if(img.src.indexOf('ex3') > -1){
               img.src = 'img/ex1.jpg'
          }
    
    }, 3500);
}



//Animação Select integrante
function animaSelect(){
       setTimeout(() => {
            document.getElementById('img1').classList.add('selectImage')
       }, 300);

       setTimeout(() => {
          document.getElementById('img1').classList.remove('selectImage')
          document.getElementById('img2').classList.add('selectImage')
       }, 600);

       setTimeout(() => {
          document.getElementById('img2').classList.remove('selectImage')
          document.getElementById('img3').classList.add('selectImage')
       }, 800);

       setTimeout(() => {
          document.getElementById('img3').classList.remove('selectImage')
          document.getElementById('img4').classList.add('selectImage')
       }, 1000);
       
       setTimeout(() => {
          document.getElementById('img4').classList.remove('selectImage')
       }, 1200);
 
}




//Oculta seleção de integrante e Mostra o integrante
document.getElementById('img1').addEventListener('click', ()=>{
        document.getElementById('index-select').style.display = 'none'
        document.getElementById('i-1').style.display = 'flex'
})

document.getElementById('img2').addEventListener('click', ()=>{
        document.getElementById('index-select').style.display = 'none'
        document.getElementById('i-2').style.display = 'flex'
})

document.getElementById('img3').addEventListener('click', ()=>{
        document.getElementById('index-select').style.display = 'none'
        document.getElementById('i-3').style.display = 'flex'
})

document.getElementById('img4').addEventListener('click', ()=>{
        document.getElementById('index-select').style.display = 'none'
        document.getElementById('i-4').style.display = 'flex'
})


//FUNÇÃO PARA RETORNAR APÓS SELEÇÃO DO INTEGRANTE
function back(){
      document.getElementById('i-1').style.display = 'none'
      document.getElementById('i-2').style.display = 'none'
      document.getElementById('i-3').style.display = 'none'
      document.getElementById('i-4').style.display = 'none'

      document.getElementById('index-select').style.display = 'flex'
}