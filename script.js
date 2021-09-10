$(function(){
    const row=20;//128x128
    const column=20;//128x128
    var wholePopulation=0;//Tüm popülasyon
    var population=0;//canlı popülasyon
    var adjacent=0;//canlı komşu sayısı
    var adjacentArray=[];//canlı komşu array
    var border=0;//sınır kontrolü
    var gameInterval;//timer
    var clicked=[];//butona basılma kontrolü
    const presets = document.querySelector('#presets');//Select Option
  
    
    $('#stop').attr('disabled','disabled');
    $('#animate').attr('disabled','disabled');

    for(let i = 0;i<row*column;i++){//clicked dizisi ayarlama basılan basılmayan cell
        clicked[i]=0;
    }

    for(let i = 0;i<row;i++){//hücreleri oluşturma
        for(let j =0;j<column;j++){
            var cell = document.createElement('div');
            cell.id=wholePopulation;
            cell.className='cell';
            cell.value=0; //oyun başında 0
            $(cell).text(`${wholePopulation}/${i}-${j}`);
            $("#gameplay").append(cell);
            wholePopulation++;
        }
    }

    
    var allCells = document.querySelectorAll('.cell');
    allCells.forEach(function(item){//hücrelere basıldığında
        $(item).on('click',function(e){
            clicked[Number(e.target.id)]++;
            if(clicked[Number(e.target.id)] %2 ==1){
                $(e.target).css('backgroundColor','#25F3A6');
                $(e.target).val(1);
                population++;
                
            }
            else{
                $(e.target).css('backgroundColor','white');
                $(e.target).val(0);
                 population--;
            }
            
            $('#p_pop').text(`Population : ${population}`);
            $('#animate').removeAttr('disabled');
            
           
        });
        
    });
   
    var  presetsChange= () =>{//select option text değişme
        clear();
        stop();
        btnAnimate.disabled=false;
        const base=105;
        if(presets.selectedIndex === 1){//glider
            makeAlive(base);
            makeAlive(base+row+1);
            makeAlive(base+(2*row)+1);
            makeAlive(base+row+2);
            makeAlive(base+2);
        }
        else if(presets.selectedIndex ===2){//pulsar
            {//#1
            makeAlive(base-(row*6)-3);
            makeAlive(base-(row*6)-4);
            makeAlive(base-(row*5)-2);
            makeAlive(base-(row*5)-3);
            makeAlive(base-(row*4)-1);
            makeAlive(base-(row*4)-3);
            makeAlive(base-(row*4)-6);
            makeAlive(base-(row*3)-1);
            makeAlive(base-(row*3)-2);
            makeAlive(base-(row*3)-4);
            makeAlive(base-(row*3)-5);
            makeAlive(base-(row*3)-6);
            makeAlive(base-(row*2)-1);
            makeAlive(base-(row*2)-3);
            makeAlive(base-(row*2)-5);
            makeAlive(base-row-2);
            makeAlive(base-row-3);
            makeAlive(base-row-4);
            }
            {//#2
                makeAlive(base-(row*6)+3);
                makeAlive(base-(row*6)+4);
                makeAlive(base-(row*5)+2);
                makeAlive(base-(row*5)+3);
                makeAlive(base-(row*4)+1);
                makeAlive(base-(row*4)+3);
                makeAlive(base-(row*4)+6);
                makeAlive(base-(row*3)+1);
                makeAlive(base-(row*3)+2);
                makeAlive(base-(row*3)+4);
                makeAlive(base-(row*3)+5);
                makeAlive(base-(row*3)+6);
                makeAlive(base-(row*2)+1);
                makeAlive(base-(row*2)+3);
                makeAlive(base-(row*2)+5);
                makeAlive(base-row+2);
                makeAlive(base-row+3);
                makeAlive(base-row+4);
            
            }
            {//#3
                makeAlive(base+row-2);
                makeAlive(base+row-3);
                makeAlive(base+row-4);
                makeAlive(base+(row*2)-1);
                makeAlive(base+(row*2)-3);
                makeAlive(base+(row*2)-5);
                makeAlive(base+(row*3)-1);
                makeAlive(base+(row*3)-2);
                makeAlive(base+(row*3)-4);
                makeAlive(base+(row*3)-5);
                makeAlive(base+(row*3)-6);
                makeAlive(base+(row*4)-1);
                makeAlive(base+(row*4)-3);
                makeAlive(base+(row*4)-6);
                makeAlive(base+(row*5)-2);
                makeAlive(base+(row*5)-3);
                makeAlive(base+(row*6)-3);
                makeAlive(base+(row*6)-4);
            }
            {//#4
                makeAlive(base+row+2);
                makeAlive(base+row+3);
                makeAlive(base+row+4);
                makeAlive(base+(row*2)+1);
                makeAlive(base+(row*2)+3);
                makeAlive(base+(row*2)+5);
                makeAlive(base+(row*3)+1);
                makeAlive(base+(row*3)+2);
                makeAlive(base+(row*3)+4);
                makeAlive(base+(row*3)+5);
                makeAlive(base+(row*3)+6);
                makeAlive(base+(row*4)+1);
                makeAlive(base+(row*4)+3);
                makeAlive(base+(row*4)+6);
                makeAlive(base+(row*5)+2);
                makeAlive(base+(row*5)+3);
                makeAlive(base+(row*6)+3);
                makeAlive(base+(row*6)+4);
            }
        }
        else if(presets.selectedIndex===3){//spaceship
            makeAlive(base);
            makeAlive(base+1);
            makeAlive(base+row-1);
            makeAlive(base+row);
            makeAlive(base+row+1);
            makeAlive(base+row+2);
            makeAlive(base+(row*2)-1);
            makeAlive(base+(row*2));
            makeAlive(base+(row*2)+2);
            makeAlive(base+(row*2)+3);
            makeAlive(base+(row*3)+1);
            makeAlive(base+(row*3)+2);
        }
        else if(presets.selectedIndex===4){//circleOfFire
            {
                makeAlive(base-(row*5)-1);
                makeAlive(base-(row*5)+1);
                makeAlive(base-(row*4)-3);
                makeAlive(base-(row*4));
                makeAlive(base-(row*4)+3);
                makeAlive(base-(row*3)-2);
                makeAlive(base-(row*3));
                makeAlive(base-(row*3)+2);
                makeAlive(base-(row*2)-4);
                makeAlive(base-(row*2)-3);
                makeAlive(base-(row*2)-2);
                makeAlive(base-(row*2));
                makeAlive(base-(row*2)+4);
                makeAlive(base-(row*2)+3);
                makeAlive(base-(row*2)+2);
                makeAlive(base-row);
            }
            {
                for(let i=1;i<=5;i++){
                    makeAlive(base-i);
                }
                for(let i=1;i<=5;i++){
                    makeAlive(base+i);
                }
            }
            {
                makeAlive(base+row);
                makeAlive(base+(row*2)-4);
                makeAlive(base+(row*2)-3);
                makeAlive(base+(row*2)-2);
                makeAlive(base+(row*2));
                makeAlive(base+(row*2)+2);
                makeAlive(base+(row*2)+3);
                makeAlive(base+(row*2)+4);
                makeAlive(base+(row*3)-2);
                makeAlive(base+(row*3));
                makeAlive(base+(row*3)+2);
                makeAlive(base+(row*4)-3);
                makeAlive(base+(row*4));
                makeAlive(base+(row*4)+3);
                makeAlive(base+(row*5)-1);
                makeAlive(base+(row*5)+1);
            }
        }
        else if(presets.selectedIndex===5){//quadpole
            makeAlive(base-row);
            makeAlive(base+row);
            makeAlive(base-row-2);
            makeAlive(base+row+2);
            makeAlive(base-(row*2)-3);
            makeAlive(base-(row*3)-3);
            makeAlive(base-(row*3)-2);
            makeAlive(base+(row*2)+3);
            makeAlive(base+(row*3)+3);
            makeAlive(base+(row*3)+2);
        }
        
        
    }
    $('#nextStep').on('click',()=>{
        gamePlay();
    });
    $('#clear').on('click',clear);
    $('#animate').on('click',()=>{
        gameInterval=setInterval(gamePlay,500);
        $('#stop').removeAttr('disabled');
    });
    $('#stop').on('click',()=>{
        stop();
    });

    var gamePlay = ()=>{
        for(let i=0;i<allCells.length;i++){//adjencyArrayı tamamıyla 0 yapmö
            adjacentArray[i]=0;
        }
        for(let i=0;i<allCells.length;i++){//adjencyArray düzenlemeleri
    
            if((i>=0) && (i<row-1)){
                border=1;
                if(i!=0){
                    if(allCells[i-1].value==1){
                        adjacent++;
                    }
                    if(allCells[i+1].value==1){
                        adjacent++;
                    }
                    if(allCells[i+row-1].value==1){
                        adjacent++;
                    }
                    if(allCells[i+row].value==1){
                        adjacent++;
                    }
                    if(allCells[i+row+1].value==1){
                        adjacent++;
                    }
                }
                if(i==0){
                    if(allCells[i+1].value==1){
                        adjacent++;
                    }
                    if(allCells[i+row].value==1){
                        adjacent++;
                    }
                    if(allCells[i+row+1].value==1){
                        adjacent++;
                    }
    
                }
            }
            if(i==(row-1)){
                border=1;
                if(allCells[i-1].value==1){
                    adjacent++;
                }
                if(allCells[i+row-1].value==1){
                    adjacent++;
                }
                if(allCells[i+row].value==1){
                    adjacent++;
                }
    
            }
            if((i!=0) && (i%row==0) && (i!=allCells[allCells.length-row].id)){
                border=1;
                if(allCells[i-row].value == 1){
                    adjacent++;
                }
                if(allCells[i-row+1].value == 1){
                    adjacent++;
                }
                if(allCells[i+1].value==1){
                    adjacent++;
                }
                if(allCells[i+row].value==1){
                    adjacent++;
                }
                if(allCells[i+row+1].value==1){
                    adjacent++;
                }
                
            }
            if(i==allCells[allCells.length-row].id){
                border=1;
                if(allCells[i-row].value == 1){
                    adjacent++;
                }
                if(allCells[i-row+1].value == 1){
                    adjacent++;
                }
                if(allCells[i+1].value==1){
                    adjacent++;
                }
                
            }
            if((i!=(row-1)) && (i%(row)==(row-1)) &&(i!=allCells[allCells.length-1].id)){
                border=1;
                if(allCells[i-row].value==1){
                    adjacent++;
                }
                if(allCells[i-row-1].value==1){
                    adjacent++;
                }
                if(allCells[i-1].value==1){
                    adjacent++;
                }
                if(allCells[i+row].value==1){
                    adjacent++;
                }
                if(allCells[i+row-1].value==1){
                    adjacent++;
                }
            }
            if(i==(allCells[allCells.length-1].id)){
                border=1;
                if(allCells[i-row].value==1){
                    adjacent++;
                }
                if(allCells[i-row-1].value==1){
                    adjacent++;
                }
                if(allCells[i-1].value==1){
                    adjacent++;
                }
            }
            if((i>(allCells[allCells.length-row].id)) && (i<allCells[allCells.length-1].id)){
                border=1;
                if(allCells[i-row].value==1){
                    adjacent++;
                }
                if(allCells[i-row-1].value==1){
                    adjacent++;
                }
                if(allCells[i-row+1].value==1){
                    adjacent++;
                }
                if(allCells[i-1].value==1){
                    adjacent++;
                }
                if(allCells[i+1].value==1){
                    adjacent++;
                }
            }
            if(border==0){
                if(allCells[i-1].value==1){
                    adjacent++;
                }
                if(allCells[i+1].value==1){
                    adjacent++;
                }
                if(allCells[i-row-1].value==1){
                    adjacent++;
                }
                if(allCells[i-row].value==1){
                    adjacent++;
                }
                if(allCells[i-row+1].value==1){
                    adjacent++;
                }
                if(allCells[i+row-1].value==1){
                    adjacent++;
                }
                if(allCells[i+row].value==1){
                    adjacent++;
                }
                if(allCells[i+row+1].value==1){
                    adjacent++;
                }
            }
            
            adjacentArray[i]=adjacent;
            adjacent=0;
            border=0;
            
        }
    
        changingColor();
        
    }

    var changingColor = () => {
        for(let i=0;i<allCells.length;i++){//renk-value değiştirme
            if((adjacentArray[i]<2) || adjacentArray[i]>3){
                if(allCells[i].value==1){
                    makeDead(i);
                }
            }
            else if(adjacentArray[i]===3){
                if(allCells[i].value==0){
                    makeAlive(i);
                }
            }
            
        }
        $('#p_pop').text(`Population: ${population}`);
    }

    var makeAlive = (index) => {
        allCells[index].value=1;
        allCells[index].style.backgroundColor='#25F3A6';
        population++;
        clicked[index]=1;
    }

    var makeDead = (index) =>{
        allCells[index].value=0;
        allCells[index].style.backgroundColor='white';
        population--;
        clicked[index]=0;
    }

    function clear(){
        wholePopulation=0;
        population=0;
        adjacent=0;
        adjacentArray=[];
        border=0;
        allCells.forEach(function(item){
            $(item).val(0);
            $(item).css('backgroundColor','#fff');
        });
        for(let i=0;i<row*column;i++){
            clicked[i]=0;
        }
       $('#p_pop').text(`Population: ${population}`);
        $('#animate').attr('disabled','disabled');
        $('#stop').attr('disabled','disabled');
        stop();
        
        

    }

    var stop = () => {
        clearInterval(gameInterval);
        
    }

   
});