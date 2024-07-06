let userPoint = 0;
let compPoint = 0;
playBtn.addEventListener('click',function(){
    intro.style.display = "none"
    game_page.style.display = "block" 
})

function userButton(value){
     if(value == 'r'){
        userHand.setAttribute('src','./assets/img/r.png')
        
     } else if( value == 'p'){
        userHand.setAttribute('src','./assets/img/p.png')
     }
      else if( value == 's'){
        userHand.setAttribute('src','./assets/img/s.png')
     }

     aiButton()
     gameLogic(value,aiButton())
}


function aiButton(){
    let randomNum = ['r','p','s']
    let randomHand = Math.floor(Math.random() * 3);

    if(randomNum[randomHand] == 'r'){
        computerHand.setAttribute('src','./assets/img/r.png')
    } else if( randomNum[randomHand] == 'p'){
        computerHand.setAttribute('src','./assets/img/p.png')
    } else{
        computerHand.setAttribute('src','./assets/img/s.png')
    } 

    return randomNum[randomHand];
} 


function gameLogic(user,comp){
    if(user == 'r' && comp == 's'
    ){
        userPoint++;
        userScore.innerHTML=userPoint;

    } else  if(user == 'p' && comp == 'r'
    ){
        userPoint++;
        userScore.innerHTML=userPoint;
        
    } else if(user == 's' && comp == 'p'
    ){
        userPoint++;
        userScore.innerHTML=userPoint;
        
    }  else if( user == comp){
        return
    } else{
        compPoint++
        aiScore.innerHTML=compPoint
    }
}  



