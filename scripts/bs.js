/*let books= JSON.parse(localStorage.getItem('books')) || [];

function addbook(){
    
    let addhtml='';
    const inputElement= document.querySelector('.js-bookinput');
    const bookname = inputElement.value;
    books.push(bookname);
    localStorage.setItem('books',JSON.stringify(books));

    console.log(books);
    for(let i=0;i<books.length;i++){
    const html= `<div>${books[i]}</div>` ;
    addhtml+= html;
    document.querySelector('.js-displaay').innerHTML = addhtml ;
    }

}*/
books=['The Encounter Effect','The Outer Space','The Psychology of Money','Breath','The Martian','The Night Circus','Ikigai','A Game of Thrones','The Buried Giant',];

let addedItems= JSON.parse(localStorage.getItem('addedItems')) || [];
console.log(addedItems);

function searchbook(){
    const inputElement = document.querySelector('.search');
    const bookname = inputElement.value ;
    console.log(bookname);
    let f= false;

    for(let i=0;i<books.length;i++)
    {
        if(books[i]===bookname)
        {
            f = true;
            document.querySelector('.allbooks').innerHTML= `<div><img src="images/${bookname}.jpeg" class="img"></div>
            <div>${bookname}</div>
            <div><button onclick="
            addToCart('${bookname}');
            " class="addToCart">add to cart</button></div>`;
        }
    }
    if(!f){
        alert('book not found');
        return;
    }


}







function addToCart(x){
    if(addedItems.includes(x)){
        alert('already added');
    }
    else{
    addedItems.push(x)
    localStorage.setItem('addedItems',JSON.stringify(addedItems));
    }
    console.log(addedItems);


}



function genaddedItems(){
    
    //let addedItems = JSON.parse(localStorage.getItem('addedItems')) ;
    let bshtml = '' ;
    for (let i=0;i<addedItems.length;i++)
    {let bookname = addedItems[i];
    const html = `<div><img src="images/${bookname}.jpeg" class="img"></div>
    <div class="title">${bookname}</div>

    <div><button onclick="
    addedItems.splice(${i},1);
    localStorage.setItem('addedItems',JSON.stringify(addedItems));

    genaddedItems();

    " class="addToCart">Remove</button>
    </div>`;

    bshtml = bshtml + html;
    
    }
    
    document.querySelector('.js-showlist').innerHTML = bshtml ;
    console.log(addedItems); 
 } 
genaddedItems();
removeorshow();

function removeorshow(){
    
    if(addedItems.length){
        let html=`<button onclick="
        addedItems.splice(0,${addedItems.length});
        localStorage.setItem('addedItems',JSON.stringify(addedItems));
        removeorshow();
        " class="addToCart">Remove all</button>`;
        document.querySelector('.remove').innerHTML= html ;

        

    }
    if (addedItems.length===0){

        document.querySelector('.remove').innerHTML= 'your list is empty' ;
        document.querySelector('.js-showlist').innerHTML= "";
        
    }
    

        

        
}
 