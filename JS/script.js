const table = document.querySelector('.table');
const PatePizza = document.getElementById('pizza-pate');
let pepperoni = document.getElementById('pepperoni');
const potage = document.getElementById('potage'); 
const pepperoniFried = document.getElementById('peperony-fried');



table.addEventListener('dragover', function(ev) {
    ev.preventDefault(); 
});

table.addEventListener('drop', function(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
   
});

PatePizza.addEventListener('dragstart', function(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
});





potage.addEventListener('dragover', function(ev) {
    ev.preventDefault(); 
});

potage.addEventListener('drop', function(ev) {
        if(pepperoni = DragEvent){
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
            //     function pepperoniFriedView(){
            //             if(true){
            //                 pepperoni.style.display="none";
            //                 pepperoniFried.style.display="block";
            //             }
            //     }
            // setInterval(pepperoniFriedView, 3000); 
        }else{
            console.log("cant drop unless pepperoni");
        }               
});
    


pepperoni.addEventListener('dragstart', function(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
});


