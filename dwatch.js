function time()
{
    var t =  new Date();
    var h = t.getHours();
    var m = t.getMinutes();
    var s = t.getSeconds();
    var ap = "" ;
    
    if( h > 12)
    {
        h = h - 12 ;
        ap = "PM";

    }
    else if( h < 12)
    {
        if( h == 0)
        {
            h = 12 ;
            ap = "AM";
        }
        else{
            ap = "AM";
        }
    }
    h = ( h < 10 ) ? "0" + h : h ;
    m = ( m < 10 ) ? "0" + m : m ;
    s = ( s < 10 ) ? "0" + s : s ; 
    
    
    var timewegot = h + ":" + m + ":" + s + " " + ap ;
    document.getElementById("Watch").innerText = timewegot ;
    document.getElementById("Watch").textContent = timewegot ;
    setTimeout(time , 1000);

}
time();

