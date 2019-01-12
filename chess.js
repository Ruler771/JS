function chess(){
     var mainBlock = document.querySelector('.mainblok');
     var block;
     var flag = true;
     
    
    for(i=0;i<8;i++){
        for(j=0;j<8;j++){
            if (j==0) flag = !flag;
            
            block = document.createElement('div');
            
            if(flag) block.className = 'black';
            else block.className = 'white';
            
            mainBlock.appendChild(block);
            flag = !flag;
        }
    }
     
}

chess();