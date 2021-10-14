const contenido = document.querySelector('.contenido')
const btnGrabarTexto = document.querySelector('.btn-grabar')
/* Primero creamos los objetos para poder grabar nuestra voz con el microfono */
const reconocimientoVoz = window.SpeechRecognition || window.webkitSpeechRecognition
const reconocimiento = new reconocimientoVoz()
/* metodo que se ejecuta al empezar a granar */
reconocimiento.onstart = ()=>{
    contenido.innerHTML = 'Estamos grabando la voz...'
}
/* Metodo que se ejecuta al terminar la grabación */
reconocimiento.onresult = event =>{
    let mensaje = event.results[0][0].transcript
    contenido.innerHTML = mensaje
    leerTextoCondicionado(mensaje)
}
/* Función que se lanza para locutar lo grabado */
const leerTextoSimple = (mensaje)=>{
    const voz = new SpeechSynthesisUtterance()
    voz.text = mensaje
    window.speechSynthesis.speak(voz)
}
/* Función que condiciona la respuesta dependiendo de el contenido de la grabación */
const leerTextoCondicionado = (mensaje)=>{
    const voz = new SpeechSynthesisUtterance()
    if(mensaje.includes('Ola','Hola')){
        voz.text = 'Bienvenida Greta, ¿Cómo estás?, es un gusto volver a verte'
    }else if(mensaje.includes('Mola')){
        voz.text = 'Eres la chica más hermosa que conozco'
    }else if(mensaje.includes('Meow', 'Gato', 'Momo')){
        voz.text = 'Momo es el mejor gato aunque está chiquito'
    }else if(mensaje.includes('Meow', 'Gato', 'Momo')){
        voz.text = 'Momo es el mejor gato aunque está chiquito'
    }else{
        voz.text = mensaje
    }
    window.speechSynthesis.speak(voz)
}

/* Evento para empezar a grabar pulsado el boton */
btnGrabarTexto.addEventListener('click', ()=>{
    reconocimiento.start()
})


