
var anchoPantalla=window.innerWidth
var altoPantalla=window.innerHeight
var anchoCanva=Math.floor(anchoPantalla-50)>400?400:Math.floor(anchoPantalla-50)
var lista=[]
var scala=30
var velocidad=0
var pixel=anchoCanva/scala
var menor
var x=0
var tiempo=velocidad
var velocidad1=0
var pause=false
function setup() {
generarLista()
  lienzo=createCanvas(anchoCanva,anchoCanva);
  lienzo.position((anchoPantalla/2)-(anchoCanva/2),(altoPantalla/2)-anchoCanva/2);
}

var i = 0;
function draw() {

if (tiempo>=velocidad&&pause==false) {
menor=i

let drawe=()=>{
  background(0,0,0)
  fill("white");
  for (const columna in lista) {
   rect(columna*pixel,anchoCanva,pixel,lista[columna]*(pixel*-1))
  } }

let o=i+1
let bucle=setInterval(() => {
 
  if (o < scala) {
    drawe()
   fill("blue")
   rect(o*pixel,anchoCanva,pixel,lista[o]*(pixel*-1))

   fill("green")
   rect(i*pixel,anchoCanva,pixel,lista[i]*(pixel*-1))
   
   
   fill("red")
   rect(menor*pixel,anchoCanva,pixel,lista[menor]*(pixel*-1))
   
    if(lista[o]<lista[menor]){
      menor=o
      }
       o++ 
    }else{
  clearInterval(bucle)
  setTimeout(()=>{
if(i!=menor){ 
  let anterior=lista[i]
  lista[i]=lista[menor]
  lista[menor]=anterior
  drawe()
  
  fill("red")
  rect(i*pixel,anchoCanva,pixel,lista[i]*(pixel*-1))
  
  
  fill("green")
  rect(menor*pixel,anchoCanva,pixel,lista[menor]*(pixel*-1))
  
  }
  i++
      pause=false
      tiempo-=velocidad1*2
      
  if (i>=scala-1) {
    i=0
    tiempo=0
    scala+=30
    pixel=anchoCanva/scala
    generarLista()
  }
    
},velocidad1)
    }
    fill("white")
    text(scala,20,20)
  }
, velocidad1);

pause=true

      }else{
  tiempo++
}
}

function generarLista() {
  for (let i = 0; i <scala; i++) {
    lista[i]=Math.floor(random(1,scala)) 
  }
}




  
