let score = JSON.parse(localStorage.getItem('score')) || {wins: 0, losses: 0, ties: 0} ;


        updateScorElement();
        /*if (!score){                       
            score= {wins: 0, losses: 0, ties: 0};
        }*/

        let randomNumber = 0 ; //const is not used since variable is reassigned agian and again

        function updateScorElement(){
            document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, Losses: ${score.losses}, Ties;${score.ties}`;
        }
 
        updateScorElement();

        let result = '' ;

        function pickComputerMove() {
            let cmove = '' ;
            randomNumber = Math.random();
            if (0 <= randomNumber && randomNumber<= (1/3)){
                cmove = 'rock' ;}
            else if ((1/3) < randomNumber && randomNumber <= (2/3)){
                cmove = 'paper' ;}
            else{
                cmove = 'scissor' ;     }//scope:any variable created inside curly bracket exists only there
            
        return cmove ;
            
            /*return; //will return undefined
            console.log('after'); //anything after return is not going to run*/

        }

        let isAutoplaying= false;
        let intervalId;

        function autoplay(){
        if(!isAutoplaying){

        intervalId=setInterval(()=>{
                const playerMove= pickComputerMove();
                playGame(playerMove);

            },1000);
            isAutoplaying= true;
        }
        else{
            clearInterval(intervalId);
            isAutoplaying=false;

        }
    }

        

        function playGame(playerMove)
        {
            cmove = pickComputerMove() ;
        
        if(playerMove==='paper')
        {
        if(cmove == 'rock' ){
                result= 'you win!'; }
            else if(cmove == 'paper' ){
                result = 'tie' ; }
            else if(cmove == 'scissor' ){
                    result = 'you loose' ; }
        }   

        else if(playerMove==='scissor')
        {
        
        if(cmove == 'rock' ){
                result= 'you loose'; }
            else if(cmove == 'paper' ){
                result = 'you win!' ; }
            else if(cmove == 'scissor' ){
                    result = 'tie' ; }
        }

        else if(playerMove==='rock')
        {
            if(cmove == 'rock' ){
                result= 'tie'; }
            else if(cmove == 'paper' ){
                result = 'you loose' ; }
            else if(cmove == 'scissor' ){
                    result = 'you win!' ; }
        }

        if(result === 'you win!'){
            score.wins += 1 ;
        }
        if(result === 'you loose'){
            score.losses += 1 ;
        }
        if(result === 'tie'){
            score.ties += 1 ;
        }
        
        document.querySelector('.js-result').innerHTML = result ;

        document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"><img src="images/${cmove}-emoji.png" class="move-icon">Computer` ;

        localStorage.setItem('score',JSON.stringify(score)); //localstorage can only save strings....use is to save in permanently so tha it doesnt get erased while reloading
        updateScorElement();

       /* alert(`you picked ${playerMove},computer chose ${cmove} . ${result}
wins: ${score.wins}, Losses: ${score.losses}, Ties;${score.ties}` );    //back quotes can display multi lines as new line */
        

        }