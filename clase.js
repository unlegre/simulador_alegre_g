//trae por Id un solo elemmento
let titulo =document.getElementById("titulo");
console.log(titulo);

//innerText
titulo.innerText ="bienvenidos a Efectivo ya !!!"
console.log("muestro lo q tiene innerText",titulo.innerText);



// Uso find para buscar un cliente en: clientes_prestamo
let clientes_prestamo = [  // arreglos de objetos
    { nombre: "alejandro", apellido :"alegre ", edad : 44, telefono: "4444-2222", email: "@ale"},
    { nombre: "camila", apellido :"ibañez ", edad : 14,telefono: "4444-3333", email: "@cami"},
    { nombre: "patricio", apellido :"lopez ", edad : 18,telefono: "4444-5555", email: "@pato"},

]
/*
function buscar_cliente( usuario){
    return usuario.nombre == "camila"
 
} */
function buscardor (){

  let buscar_cliente = prompt("ingrese su nombre :")

  let resultado_find = clientes_prestamo.find(usuario=>usuario.nombre ==  buscar_cliente );
  console.log("su nombre es  :",resultado_find.nombre);
  console.log("su nombre es  :",resultado_find.apellido);
  console.log("su nombre es  :",resultado_find.telefono);

  //console.log(" se encontro a : ", resultado_find);
  console.log("--------------------------");
}




// Uso  forEach para ver por consola el total de : clientes_prestamo
clientes_prestamo.forEach(function(total_clientes){
  console.log("la lista de los clientes son :",total_clientes);
  console.log("------------°--------------");
})



class Usuario_prestamo{
  constructor(nombre,apellido,edad,telefono,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.telefono = telefono;
    this.email = email;
  }
}
alert(" Complete los datos solicitados para su prerstamos");

let lista_usuario =[];


//for( let i = 0; i < 1 ; i++){   lo reemplace por funcion flecha
/*
  const createUser = () =>
  {     
  let nombre =prompt("ingrese su nombre");
  let apellido = prompt(" ingrese su apellido");
  let edad = prompt("ingrese su edad");
  let telefono=prompt("ingrese telefono :");
  let email =prompt("ingre email de contacto :")

  let nuevo_usuario = new Usuario_prestamo (nombre ,apellido ,edad,telefono,email); // creo nuevo_usuario para capturar los datos de la class Usuario_prestamo
   console.log(nuevo_usuario);
  lista_usuario.push(nuevo_usuario); // ahora envio con un push los datos al arreglo Lista_usuario []; que se cargo en nuevo_usuario
  console.log(lista_usuario); // y muestro por consola el arreglo: lista_usuario 
}
createUser(); */



 
function calcular_prestamo (monto_1,cuotas_1){
  if( cuotas_1 == 3){
    return monto_1 * 1.25
  }
  else if(cuotas_1 == 6){
    return monto_1 * 1.40 
  }
  else if(cuotas_1 == 12){
    return monto_1 * 1.60
  }
  else if(cuotas_1 == 18){
    return monto_1 * 1.90
  }
  else{
    console.log("ingrese una cuota entre : 3 , 6 , 12 y 18 ")
  }
}

class Prestamo{
  constructor(monto_1,cuotas_1){
    this.monto_1 = monto_1;
    this.cuotas_1 = cuotas_1;
  }
} 
let lista_prestamo =[];
//formulario
formulario.addEventListener("submit",function(e){

  e.preventDefault();    
  let nombre =document.getElementById("nombre");
  let apellido =document.getElementById("apellido");
  let email =document.getElementById("email");
  let telefono =document.getElementById("telefono");
  let edad =document.getElementById("edad");
  
  alert("el nombre es :"+nombre.value,);
  alert("el apellido es :"+apellido.value);
  alert("el Email es :"+email.value);
  alert("el telefono es :"+telefono.value);
  alert("la edad es :"+edad.value);

  alert("Presione enter si es OK");
  
  })


//boton simulador con funcion
let boton_simulador= document.getElementById("boton_simulador");

boton_simulador.addEventListener("click",function(){
  alert(" Ahora ingrese los datos solicitados para Simular su prerstamos");
  for  ( let i= 0; i < 1 ; i++){

    let monto_1 = parseFloat(prompt("Simulador de Prestamo----Ingrese Monto a Solicitar"))
    let cuotas_1 = parseFloat(prompt("ingrese la cantidad de cuotas : 3 - 6 - 12 -18 "));
    
    calcular_prestamo (monto_1,cuotas_1)
    
    
    let total_prestamo = calcular_prestamo (monto_1,cuotas_1)/cuotas_1;
    console.log("usted va a pagar por cuotas :",total_prestamo ) 
    alert("usted va a pagar :"+" "+cuotas_1+" "+"cuotas de :"+total_prestamo);
  
    let nuevo_prestamo = new Prestamo(monto_1,cuotas_1);// creo nuevo_prestamo  para capturar los datos de la class :Prestamo
    lista_prestamo.push(nuevo_prestamo); // ahora envio con un push los datos al arreglo Lista_prestamo []; que se cargo en ;nuevo_prestamo
  
  } 
  console.log(lista_prestamo); // y muestro por consola el arreglo:  Lista_prestamo [];
  

}
);

// mausedow 



let cuotas_3 =document.getElementById("cuotas_3");

cuotas_3.addEventListener("click",function(){
    alert("3 cuotas");
    }
    ) 

    let ceis =document.getElementById("ceis");

    ceis.addEventListener("click",function(){
    alert("6 cuotas");
    }
    )

    let doce =document.getElementById("doce");

    doce.addEventListener("click",function(){
    alert("12 cuotas");
    }
    ) 

    let diez_y_ocho =document.getElementById("diez_y_ocho");

    diez_y_ocho.addEventListener("click",function(){
        alert("18 cuotas");
        }
        ) 



//even listener  puedo ejecutar varias funciones
let Bajo_dependencia = document.getElementById("Bajo_dependencia");

Bajo_dependencia.addEventListener("click",function(){
console.log("selecciono : Bajo dependencia");
}
); 

Bajo_dependencia.addEventListener("click",function(){
    alert("selecciono : Bajo dependencia");
    }
    ); 

    let Monotributista = document.getElementById("Monotributista");

    Monotributista.addEventListener("click",function(){
console.log("selecciono : Monotributista");
}
); 

Monotributista.addEventListener("click",function(){
    alert("selecciono : Monotributista");
    }
    ); 

    let Jubilado = document.getElementById("Jubilado");

    Jubilado.addEventListener("click",function(){
    console.log("selecciono : Jubilado");
    }
    ); 
    
    Jubilado.addEventListener("click",function(){
        alert("selecciono : Jubilado");
        }
        ); 

    let dni = document.getElementById("dni");

    Bajo_dependencia.addEventListener("click",function(){
    console.log("selecciono : Dni");
    }
    ); 
    
    dni.addEventListener("click",function(){
        alert("selecciono : Dni");
        }
        ); 








