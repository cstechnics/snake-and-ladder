boxNumbers()
document.addEventListener('keydown',(e)=>{
    if(e.keyCode=='83'){
        let diceNum =roll()
    }
})
function roll(){
    let diceNum=Math.floor(Math.random()*6)+1
    let values=[[0,-360],[-180,-360],[-180,270],[0,-90],[270,180],[90,90]]
    document.querySelector('#cube_inner').style.transform=`rotateX(${values[diceNum-1][0]}deg) rotateY(${values[diceNum-1][1]}deg)`
    return diceNum
}

function boxNumbers(){
    let boxes=document.querySelectorAll('.box')
    boxes.forEach((box,i)=>{
        if(String(i).length==1 || (String(i).length==2 && Number(String(i)[0]))%2==0){
            box.innerHTML =100-i
        }

       
       else{
           box.innerHTML=Number(`${9-Number(String(i)[0])}${String(i)[1]}`)+1

       }
    })
}