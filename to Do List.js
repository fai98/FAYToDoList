           
           
           
    // adding enter key ...
        let enter=document.querySelector("input");
        enter.addEventListener('keypress',entr , false);
        function entr(key){
            if (key.keyCode == "13"){
            addNewTask()
            }
        }

      

function addNewTask(){
           var text =document.getElementById("task").value;
           var test =text.length;
           if (test == 0 ){
               alert("لم تدخل المهمه بعد");
   }else{
             //create task 
           let create= document.createElement("p"); 
           document.getElementById("myLis").appendChild(create);
            create.innerHTML = "<h3 >  -   " + text +"   </h3> <button class='done' > ✓ </button> <button class='delete' > X </button > ";
            
            //empty the input feld
            
            var  inputCR =document.querySelector("input");
                inputCR.value ="";

            
        
   } 

} 

// <img src='delete.svg'width='18'height='18'>





//Delete the task code.
   
var  DeleteButton = document.querySelector("#parnt #myLis");
   
   DeleteButton.addEventListener('click',function(e){
       if(e.target.className == 'delete'){
           const DB = e.target.parentElement;
           DB.parentNode.removeChild(DB);

       }
   
})
 



//check the task code.
   var  DoneButton = document.querySelector('#parnt #myLis');
   DoneButton.addEventListener('click',function(e){

       if(e.target.className == 'done'){
          
           // let x = e.target.previousSibling;
           let x = e.target.previousElementSibling;

           x.classList.toggle("complet");
           // console.log(x);
       }

})   
   



   

