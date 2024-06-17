
function aparecer_nave(){
  let butt_S = document.querySelector(".list_nave");
   let navegacao_A = document.querySelector(".nav");
  navegacao_A.style.display = "block";
  butt_S.style.display = "none";

}

function desaparecer_bott(){
  
  let navegacao_D = document.querySelector(".nav");
  navegacao_D.style.display = "none";
  //let butt_A = querySelector(".list_nave");
 // butt_A.style.display = "block";
}
  function aparecerbt(){
    let butt_A = querySelector(".list_nave");
    butt_A.style.display = "block";
  }




  function toggleMenu(){
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu.style.display==='flex'){
      navMenu.style.display= 'none';
    }else{
      navMenu.style.display = "flex";
    }
    }
  