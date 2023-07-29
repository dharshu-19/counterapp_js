
let count=0
document.getElementById("increment").onclick =function(){
  count += 1
  document.getElementById("counter").innerText=count;
}

document.getElementById("save").onclick =function(){

    let countstr =count + " - "
    document.getElementById("enteries").innerText  += countstr
    // console.log(count)
    count = 0
    document.getElementById("counter").innerText=count;
}

