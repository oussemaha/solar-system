
function bouton(){
    let x=document.getElementById("popup");
    let y =document.getElementById("bloc");
    if ( x.className.match(/(?:^|\s)settings(?!\S)/) ){
        x.className =x.className.replace( /(?:^|\s)settings(?!\S)/g , '' )
        y.className=y.className.replace( /(?:^|\s)opacity(?!\S)/g , '' )
    }
    else{
        x.classList.add('settings');
        y.classList.add("opacity");
    }
}