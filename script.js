function ChangeColor()
{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    var random =Math.random();
    var rgba="rgba("+r+","+g+","+b+","+random+")"
    return rgba;
}

function rndColor()
{
    var btn=document.getElementsByClassName("myBtn");
    var color=ChangeColor();
    btn[0].style.backgroundColor=color;
}