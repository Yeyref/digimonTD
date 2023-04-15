alert('Contenido nostalgico, si está de acuerdo con verlo presione aceptar, de lo contrario, piensalo por fa, no te vayas :(');


document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
});



function iniciarApp(){
    tabla();
}

fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(datos => {
        console.log(datos)
        for (let temp of datos) {
            tabla(temp)
            
        }
    })

    function tabla(temp) {
        let contenido = document.getElementById('contenido');
        contenido.innerHTML += `

    <div>
        <div class="card carta carta__zoom ">
                    
                    <div class="card-body ">
                        <h4 class="card-title text-center border-bottom border-warning">${temp.name}</h4>
                        <img src="${temp.img}" width="150" class="card-img-top border-bottom border-warning" alt="apariencia del digimon">
                        <p class="card-text text-center ">Nivel: ${temp.level}</p>
                        
                    </div>
                </div>
     </div>   
            
        `
    }

      