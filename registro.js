function registro(){
    const pnombre=document.getElementById("pnombre").value;
    const snombre=document.getElementById("snombre").value;
    const papellido=document.getElementById("papellido").value;
    const sapellido=document.getElementById("sapellido").value;
    const identificacion=document.getElementById("ident").value;


    const tDocument=document.getElementById("boxselect").value;
    let tipoDocumento;

    switch(tDocument){
        case "1":
            tipoDocumento = "Cedula de ciudadanía";
            break;
        case "2":
            tipoDocumento = "Cedula de extranjería";
            break;
        case "3":
            tipoDocumento = "Pasaporte";
            break;
        default:
            alert("Por favor ingrese un tipo de identificación")
            break;
    }

    const fechanac=document.getElementById("fechaNacimiento").value;
    let nuevaFecha = new Date(fechanac)
    const correo=document.getElementById("correo").value;
    const password=document.getElementById("contraseña").value;

    console.log(pnombre,snombre,papellido,sapellido,tipoDocumento,identificacion,correo,password, nuevaFecha)
}   

