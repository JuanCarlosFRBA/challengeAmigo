// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


    const nombreAmigos = [];
   
    const btnAgregar = document.querySelector(".button-add"); 
    const btnSortear = document.querySelector(".button-draw");

    
    function agregarAmigo() {
        const unAmigo = document.querySelector(".input-name"); 
        const listaDeAmigos = document.querySelector(".name-list");
        const nombre = unAmigo.value.trim(); 
        
        if (nombre == "") {
            alert("Ingrese un nombre valido. Gracias!"); 
            return;
        }

        if (nombreAmigos.includes(nombre)){
            alert("Este nombre ya esta en la lista, prueba tu segundo nombre o apellido");
            return;
        }

        nombreAmigos.push(nombre); 
        unAmigo.value = ""; 
        
        actualizarLista(); 
    }

    function actualizarLista() {
        
        const listaDeAmigos =document.querySelector(".name-list");
        listaDeAmigos.innerHTML = ""; 
        nombreAmigos.forEach(nombre => {
            const li = document.createElement("li"); 
            li.textContent = nombre; 
            li.setAttribute("role", "listitem"); 
            listaDeAmigos.appendChild(li); 
        });
    }

    function sortearAmigo() {
        const resultado = document.querySelector(".result-list");
        if (nombreAmigos.length === 0) {
            alert("La lista esta vacia"); 
            return;
        }
        const indice = Math.floor(Math.random() * nombreAmigos.length); 
        const amigoSecreto = nombreAmigos[indice]; 
        resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`; 
        
        nombreAmigos.length = 0;
        actualizarLista();

    }

    