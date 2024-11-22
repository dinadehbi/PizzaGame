const table = document.querySelector('.table');
const PatePizza = document.getElementById('pizza-pate');
const pepperoni = document.getElementById('pepperoni');
const potage = document.getElementById('potage'); 
const pepperoniFried = document.getElementById('peperonyFried');
const pattePizzaImage = document.createElement('img');
const breadStore = document.querySelector('.bread-store');
const tomatoSauce = document.getElementById('tomate-sauce');
const oliveBol = document.getElementById('olive-bol');
let oliveCut = document.createElement('img');
let oliveCutId = document.getElementById('oliveCut');
const oliveCon = document.getElementById('olives-con');


// table drop
table.addEventListener('dragover', function(ev) {
    ev.preventDefault(); 
});

table.addEventListener('drop', function(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(data === 'pizza-pate'){
        ev.target.appendChild(document.getElementById(data));
        pattePizzaImage.id = "new-patte-pizza";
        pattePizzaImage.src= "..\IMAGES\pizza-pate.png";
        document.breadStore.appendChild(pattePizzaImage);
    }else{
        console.log("cant drop unless pizza patte");
    }
   
});



// potage drop


potage.addEventListener('dragover', function(ev) {
    ev.preventDefault(); 
});

potage.addEventListener('drop', function(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            if(data === 'pepperoni'){
                    ev.target.appendChild(document.getElementById(data));
                        function pepperoniFriedView(){
                                if(true){
                                    pepperoni.style.display="none";
                                    pepperoniFried.style.display="block";
                                }
                        }
                    setInterval(pepperoniFriedView, 3000); 
            }else{
                console.log("cant drop unless pepperoni");
            }               
});
    


pepperoni.addEventListener('dragstart', function(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
});

pepperoni.addEventListener('dragover', function(ev) {
    ev.preventDefault(); 
});
  

// Pate pizza 


PatePizza.addEventListener('dragstart', function(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
});


PatePizza.addEventListener('dragover', function(ev) {
    ev.preventDefault(); 
});

PatePizza.addEventListener('drop', function(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    if(data === 'tomate-sauce'){
            tomatoSauce.style.display="none";
            PatePizza.style.backgroundColor="red";
            PatePizza.style.border="5px solid #fed6a4";
      }else{
       console.log('cant drop unless sauce tomate');
     }
     if(data === 'olive-bol'){
       
        //  oliveCut.src='../IMAGES/olive-cuted.png';
        //  oliveCut.id='oliveCut';
        //  oliveCut.style.display='block';
        //  document.getElementById('pizza-pate').appendChild(oliveCut);
        
       //document.getElementById('div1').style.display= "block";
        oliveBol.style.display='none';
        // oliveCon.style.position="relative";
        // oliveCon.style.left= "30px";
        // oliveCon.style.top = "30px";
       document.getElementById('olives-con').style.display="block";
    //    if(data === 'pepperoni'){
    //         // pepperoni.style.position="relative";
    //         // pepperoni.style.top = "-100px"
    //         pepperoni.style.marginBottom="300px";
    //     }
     }
   
       
})



pepperoniFried.addEventListener('dragstart', function(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
});

pepperoniFried.addEventListener('dragover', function(ev) {
    ev.preventDefault(); 
});


tomatoSauce.addEventListener('dragstart', function(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
});

tomatoSauce.addEventListener('dragover', function(ev) {
    ev.preventDefault(); 
});




oliveBol.addEventListener('dragstart', function(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
});

oliveBol.addEventListener('dragover', function(ev) {
    ev.preventDefault(); 
});




// oliveCutId.addEventListener('drop', function(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//         ev.target.appendChild(document.getElementById(data));     
// });
// oliveCutId.addEventListener('dragover', function(ev) {
//     ev.preventDefault(); 
// });


// pepperoni.addEventListener('drop', function(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//         ev.target.appendChild(document.getElementById(data));     
// });
// pepperoni.addEventListener('dragover', function(ev) {
//     ev.preventDefault(); 
// });


