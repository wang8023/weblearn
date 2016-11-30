var flag = true;
function uldisplay(){
    var uldis = document.getElementById('ulid');
    if(flag){
        uldis.style.display = "none";
        flag = false;
    }else{        
        uldis.style.display = "table-cell";
        flag = true;
    }
    
}