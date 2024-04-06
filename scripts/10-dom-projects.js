window.document
            window.console.log('window'); //window is a built in object...we dont have to necessarily type it





            function calculateTotal(){
                const inputCost= document.querySelector('.js-cost-of-order'); //whenever we get a value from dom it will be a string
                let cost = Number(inputCost.value);

                if(cost<40){
                    cost= cost+10 ;
                }
                
                
                document.querySelector('.js-ttlcost')
                .innerHTML= `$${cost}`
            }


            function subscribe(){
                const buttonElement = document.querySelector('.js-subscribe-button');

       if(buttonElement.innerText==='Subscribe'){
        buttonElement.innerHTML = 'Subscribed' ;
        buttonElement.classList.add('is-subscribed');
       }
       else {
        buttonElement.innerHTML= 'Subscribe';
        buttonElement.classList.remove('is-subscribed');
       }
            }
        