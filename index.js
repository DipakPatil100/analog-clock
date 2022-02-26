setInterval (date,1000);                          //   setInterval(()=>{
   function date(){                               //      d=new Date();
     d = new Date();                              //      htime=d.Hours();
     htime= d.getHours();                         //      htime=d.Hours();
     mtime= d.getMinutes();                       //      htime=d.Hours();
     stime= d.getSeconds();                       //      ..............
                                                 
     hrotation = 30*htime + mtime/2;              //      },1000); 
     mrotation = 6*mtime;
     srotation = 6*stime;

     hour.style.transform = `rotate(${hrotation}deg)`
     minute.style.transform = `rotate(${mrotation}deg)`
     second.style.transform = `rotate(${srotation}deg)`
   }
 