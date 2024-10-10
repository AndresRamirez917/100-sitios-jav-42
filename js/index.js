async function getData() {
    const result = await fetch('https://randomuser.me/api?results=2');
    const ranUser = await result.json();
    console.log(ranUser)
    ranUser.results.forEach(element => {
        const img = document.createRange().createContextualFragment(`
            
            <div class="card card-1">
                    <img src="${element.picture.large}" alt="">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur deleniti nisi, non saepe eaque vel sed labore in fugiat ipsa obcaecati reprehenderit debitis itaque cumque harum consequatur ipsam veniam quaerat!</p>
                </div>
            
            `)
            const card = document.querySelector('.opinions-row');
 
            card.append(img)
  
    });
}

const btn_validar = document.getElementById('btn-validar');
const validar = (e) => {
e.preventDefault();
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
const arr = [];
const messageArr = ["Nombre", "Email", "Mensaje"];
arr.push(nombre, email, mensaje);
for(i = 0; i < arr.length; i++){
    if(arr[i].value == ""){
        swal({
            title: `El campo ${messageArr[i]} no puede estar vacío`,
            icon: "error",
             })
             return false;
    }
}
if(!emailValido(email)){
    swal({
        title: `El campo ${messageArr[1]} no tiene el formato adecuado`,
        icon: "error",
         })
         return false;
}
swal({
    title: `Datos enviados satisfactoriamente`,
    icon: "success",
     })
     nombre.value = "";
     email.value = ""; 
     mensaje.value = "";
return true;
}

const emailValido = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
}

async function get1Data() {
    const result = await fetch('https://randomuser.me/api?results=3');
    const ranUser = await result.json();
    const cajitaTitle = ["DOUBLE ROOM", "DELUXE ROOM", "HONEYMOON ROOM"];
    console.log(ranUser)
    ranUser.results.forEach(element => {
        //for(i = 0; i < cajitaTitle.length; i++){
            //for(j = 0; j < cajitaTitle[i].length; i++){
                const img = document.createRange().createContextualFragment(`
                    
                  <div class="cajita">
                    <img src="${element.picture.large}" alt="">
                    <div class="cajita-text">
                        <h2>${element.name.first}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed sunt hic quas eum voluptas saepe nulla nihil harum consectetur.</p>
                    </div>
                </div>
                    
                    `)
                    const card = document.querySelector('.services-row');
                    card.append(img)
            //}
        //}
  
    });
}





get1Data()
getData()
btn_validar.addEventListener("click", validar); 

{/* <div class="cajita">
<img src="" alt="">
<div class="card-text">
    <h2>HONEYMOON ROOM</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed sunt hic quas eum voluptas saepe nulla nihil harum consectetur.</p>
</div>
</div> */}