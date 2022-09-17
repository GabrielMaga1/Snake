var mat = new Array(19);
var canvas = document.getElementById('center');
for (var i = 0; i <= 18; i++) {
    mat[i] = new Array(19);
}
for(let i = 0; i <= 18; ++i){
    for(let j = 0; j <= 18; ++j){
        mat[i][j] = document.createElement("div");
        mat[i][j].setAttribute("class", "Container");
        mat[i][j].value = 0;
        if(i == 0 || i == 18 || j == 0 || j == 18){
            mat[i][j].style.backgroundColor = "rgb(50, 97, 73)";
        }
        canvas.appendChild(mat[i][j]);
    }
}
mat[8][1].value = 1;
mat[8][2].value = 2;
mat[8][3].value = 3;
var lgt = 3;
var cont = 0;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
var row = 8;
var col = 16;
function inhanceLength(mat){
    for(let i = 0; i <= 18; ++i){
        for(let j = 0; j <= 18; ++j){
            if(mat[i][j].value > 0 && mat[i][j].value < 101){
                ++mat[i][j].value;
            }  
        }
    }
    ++lgt;
}
function reorder(mat){
    if(mat[row][col].value > 0){
        inhanceLength(mat);
    }
    for(let i = 0; i <= 18; ++i){
        for(let j = 0; j <= 18; ++j){
            if(mat[i][j].value > 0 && mat[i][j].value < 101){
                --mat[i][j].value;
            }
            else if(mat[i][j].value == 101){
                mat[i][j].value = lgt;
            }
            while(mat[row][col].value != 0){
                row = getRandomInt(1, 17);
                col = getRandomInt(1, 17);

            }
            mat[row][col].style.backgroundColor = "rgb(194, 47, 47)";
        }
    }
}
window.addEventListener('keydown', (e)=>{ 
    if(e.key === 'ArrowRight' && cont != 4){
        cont = 1;
        const intervalID = setInterval(()=>{
            for(let m = 0; m <= 18; ++m){
                for(let n = 0; n <= 18; ++n){
                    if(mat[m][n].value == lgt){
                        if(mat[m][n+1].value > 0){
                            clearInterval(intervalID);
                            alert('Game Over!');
                            location.reload();
                            break;  
                        }
                        mat[m][n+1].value = 101;  
                    }
                    if(mat[m][n].value > 0){
                        mat[m][n].style.backgroundColor = "rgba(73, 54, 126, 0.856)";
                    }
                    else{
                        mat[m][n].style.backgroundColor = "rgb(84, 107, 62)";
                    }
                    if(m == 0 || m == 18 || n == 0 || n == 18){
                        mat[m][n].style.backgroundColor = "rgb(50, 97, 73)";
                    }
                    if(mat[m][18].value > 0){
                        clearInterval(intervalID);
                        alert('Game Over!');
                        location.reload();
                        break;  
                    }
                }
            } 
            reorder(mat);
            addEventListener('keydown', (e)=>{
                if(e.key === 'ArrowLeft'){
                    e.key = 'ArrowRight';
                }
                else{
                    clearInterval(intervalID);
                }
                    
            });

        },150);  
    } 
    if(e.key === 'ArrowDown' && cont != 3){
        cont = 2;
        const intervalID = setInterval(()=>{ 
            for(let m = 0; m <= 17; ++m){
                for(let n = 0; n <= 18; ++n){
                    if(mat[m][n].value == lgt){
                        if(mat[m+1][n].value > 0){
                            clearInterval(intervalID);
                            alert('Game Over!');
                            location.reload();
                            break;  
                        }
                        mat[m+1][n].value = 101;
                            
                    }
                    if(mat[m][n].value > 0){
                        mat[m][n].style.backgroundColor = "rgba(73, 54, 126, 0.856)";
                    }
                    else{
                        mat[m][n].style.backgroundColor = "rgb(84, 107, 62)";
                    }
                    if(m == 0 || m == 18 || n == 0 || n == 18){
                        mat[m][n].style.backgroundColor = "rgb(50, 97, 73)";
                    }
                    if(mat[18][n].value > 0){
                        clearInterval(intervalID);
                        alert('Game Over!');
                        location.reload();
                        break;
                    }
                }
            }
            reorder(mat);
            addEventListener('keydown', (e)=>{
                if(e.key === 'ArrowUp'){
                    e.key = 'ArrowDown';
                }
                else{
                    clearInterval(intervalID);
                }
            });
         }, 150);
    }
    if(e.key === 'ArrowUp' && cont != 2){
        cont = 3;
        const intervalID = setInterval(()=>{ 
            for(let m = 18; m >= 1; --m){
                for(let n = 0; n <= 18; ++n){
                    if(mat[m][n].value == lgt){
                        if(mat[m-1][n].value > 0){
                            clearInterval(intervalID);
                            alert('Game Over!');
                            location.reload();
                            break;  
                        }
                        mat[m-1][n].value = 101;
                                
                    }
                    if(mat[m][n].value > 0){
                        mat[m][n].style.backgroundColor = "rgba(73, 54, 126, 0.856)";
                    }
                    else{
                        mat[m][n].style.backgroundColor = "rgb(84, 107, 62)";
                    }
                    if(m == 0 || m == 18 || n == 0 || n == 18){
                        mat[m][n].style.backgroundColor = "rgb(50, 97, 73)";
                    }
                            
                    if(mat[0][n].value > 0){
                        clearInterval(intervalID);
                        alert('Game Over!');
                        location.reload();
                        break;
                    }
                }
            } 
            reorder(mat);
            addEventListener('keydown', (e)=>{
                if(e.key === 'ArrowDown'){
                    e.key = 'ArrowUp';
                }
                else{
                    clearInterval(intervalID);
                }
            });
    
        },150);  
    }
    if(e.key === 'ArrowLeft' && cont != 1){
        cont = 4;
        const intervalID = setInterval(()=>{ 
            for(let m = 0; m <= 18; ++m){
                for(let n = 18; n >= 0; --n){
                    if(mat[m][n].value == lgt){
                        if(mat[m][n-1].value > 0){
                            clearInterval(intervalID);
                            alert('Game Over!');
                            location.reload();
                            break;  
                        }
                        mat[m][n-1].value = 101;
                    }
                    if(mat[m][n].value > 0){
                        mat[m][n].style.backgroundColor = "rgba(73, 54, 126, 0.856)";
                    }
                    else{
                        mat[m][n].style.backgroundColor = "rgb(84, 107, 62)";
                    }
                    if(m == 0 || m == 18 || n == 0 || n == 18){
                        mat[m][n].style.backgroundColor = "rgb(50, 97, 73)";
                    }
                    if(mat[m][0].value > 0){
                        clearInterval(intervalID);
                        alert('Game Over!');
                        location.reload();
                        break;
                    }
                }
            } 
            reorder(mat);
            addEventListener('keydown', (e)=>{
                if(e.key === 'ArrowRight'){
                    e.key = 'ArrowLeft';
                }
                else{
                    clearInterval(intervalID);
                }
                            
            });
        
        },150);  
    } 
});
          

  