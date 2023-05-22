const textosLimpieza = [

{ titulo: "TRANSFERENCIA PENDIENTE",

  texto: "¡Buen día!,\n\nAún no registramos el pago de su compra. Si fue correctamente realizado le pedimos nos de aviso compartiendo el comprobante del mismo junto al nombre del titular de la cuenta bancaria. De esta manera podremos identificar el ingreso y asociarlo al pedido. Puede hacerlo por esta vía o también a nuestro whatsapp 11-44026605 haciendo click en 👇 https://bit.ly/Whatsapp-Argentrade.\n\nQuedamos a disposición\nSaludos,\nEquipo Randers Argentrade"
},
{
  titulo: "PAGO RACHAZADO LINK",
  texto: "¡Buen día!,\n\nLamentablemente su compra fue cancelada ya que Mercado Pago, el gestor de cobros oficial de nuestra tienda, no pudo aprobar el uso de su tarjeta siendo ésta rechazada por los métodos automáticos de verificación de la plataforma. Si desea asistencia para reactivarla por favor escríbanos a nuestro whatsapp 11-44026605 o por el siguiente enlace 👇 https://bit.ly/Whatsapp-Argentrade con el número de orden de tu compra.\n\nQuedamos a disposición\nSaludos,\nEquipo"
},
{
  titulo: "PAGO RACHAZADO CARTERS",
  texto: "¡Buen día!,\n\nLamentablemente su compra fue cancelada ya que Mercado Pago, el gestor de cobros oficial de nuestra tienda, no pudo aprobar el uso de su tarjeta siendo ésta rechazada por los métodos automáticos de verificación de la plataforma. Este proceso tiene un carácter automático y autónomo. Esperamos pueda intentarlo nuevamente pronto."
}
]

textosLimpieza.forEach((texto) => {
  const contenedor = document.createElement("article");
  contenedor.classList.add("texto");
  contenedor.innerHTML = `<a class="btnDisparador btn btn-secondary mx-3 p-3" href="#" role="button">${texto.titulo}</a>`;
  botonesTextoLimpieza.appendChild(contenedor);

  const btn = contenedor.querySelector("a");
  btn.addEventListener("click", () => {
    navigator.clipboard.writeText(texto.texto)
      .then(() => {
        notification ();
      })
      .catch((error) => {
        console.error("Error al copiar al portapapeles: ", error);
      });
  });
});



const textosMeli = [
   
   { titulo: "SALUDO ACORDAR ENTREGA" ,texto: `"¡Hola! Muchas gracias por tu compra \n
   ¿Podrías indicarnos los siguientes datos para cotizar el envío?\n
   * Calle
   * Numeración
   * Cruces
   * Código postal
   * Ciudad
   * Provincia
   * Teléfono
   De esta manera podremos generar un enlace de pago y comenzar el proceso de preparación.\n
   ¡Aguardamos tu respuesta!\n"` },
  
   { titulo: "SALUDO ENVÍO PENDIENTE" ,texto: `"¡Hola! Muchas gracias por tu compra \n
   En las próximas 48/72hs hábiles procederemos con el despacho. En cuanto esté en manos del correo podremos brindarte un código para realizar el seguimiento. Con éste podrá conocer los diferentes estadíos del recorrido y de la entrega.
   Se estiman entre 3 y 7 días hábiles desde el despacho.!\n"` },
  
   { titulo: "SALUDO ENVÍO RECHAZADO M.E" ,texto: `"¡Hola! Muchas gracias por tu compra \n
   Te escribimos para comentarte que, por el tamaño del paquete, Mercado Envíos no pudo tomar el envío. ¡No te preocupes! Nos indicaron desde Mercado Libre que hagamos el envío con nuestro sistema de correos habitual. Podremos brindarte el tracking por aquí apenas salga. Quedamos a disposición por supuesto.\n"` },
  
  
  ]
  
  textosMeli.forEach((texto) => {
    const contenedor = document.createElement("article");
    contenedor.classList.add("texto");
    contenedor.innerHTML = `<a class="btnDisparador btn btn-secondary mx-3 p-3" href="#" role="button">${texto.titulo}</a>`;
    botonesTextoMeli.appendChild(contenedor);
  
    const btn = contenedor.querySelector("a");
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(texto.texto)
        .then(() => {
          notification ();
        })
        .catch((error) => {
          console.error("Error al copiar al portapapeles: ", error);
        });
    });
  });
  
  
  const textosCarters = [
    {
      titulo: "CONFIRMACIÓN DE CAMBIO",
      texto: "¡Hola!,\nElevamos correctamente el pedido de cambio 😊,\nEn los próximos días será despachado y podremos brindarte el seguimiento del correo.,\nAl momento de recibir el envío recordá entregar el paquete para devolución lo más similar posible a cómo fue recibido, con su bolsita y etiquetas."
    },
    {
      titulo: "AVISO ENVIO DE CAMBIO",
      texto: "¡Hola!,\nTe escribimos para comentarte que mañana estará saliendo el nuevo envío.,\nPodrás realizar pronto el seguimiento ingresando al siguiente tracking 👇,\n\nhttps://www.andreani.com/#!/informacionEnvio/,\n\nAl momento de recibir el envío recordá entregar el paquete completo para devolución lo más similar posible a cómo fue recibido 😊"
    },
    {
      titulo: "MAYORISTA",
      texto: "¡Buenas!\n\nMuchas gracias por escribirnos\n\nLe compartimos el formulario para asociarse al canal retail. Nuestro equipo analizará el caso y le brindará atención de acuerdo a la disponibilidad. En este momento no contamos con cupos pero esperamos poder sumar lugares para este año.\n\nhttps://docs.google.com/forms/d/e/1FAIpQLSc8ybrAfhpfKyeqG6Dtd6Bo94yOYxPdCyLGG4NotI6xebNyFA/viewform"
    },
    {
      titulo: "TRACKING",
      texto: "¡Hola!\n\nMuchas gracias por tu mensaje.\n\nVemos que el paquete se encuentra en manos del correo.\nTe dejamos por aquí el tracking generado por Andreani:\n\nhttps://www.andreani.com/#!/informacionEnvio/360000798133170"
    }
    ]
    
    textosCarters.forEach((texto) => {
      const contenedor = document.createElement("article");
      contenedor.classList.add("texto");
      contenedor.innerHTML = `<a class="btnDisparador btn btn-secondary mx-3 p-3" href="#" role="button">${texto.titulo}</a>`;
      botonesCarters.appendChild(contenedor);
    
      const btn = contenedor.querySelector("a");
      btn.addEventListener("click", () => {
        navigator.clipboard.writeText(texto.texto)
          .then(() => {
            notification ();
          })
          .catch((error) => {
            console.error("Error al copiar al portapapeles: ", error);
          });
      });
    });
    
    
    const textosGenerales = [
      {
        titulo: "SAC",
        texto:
          "Por repuestos o asistencia técnica deberías comunicarte con nuestra área de servicio de atención al cliente al mail postventa1@argentrade.net o al 0810 345 0447 Opción 1 de Lunes a Viernes de 9 a 15 hs.",
      },
      {
        titulo: "ENVIOS ENVÍOPACK",
        texto:
          "Los envíos están a cargo de Envío Pack, una central de logística que dependiendo de tu localidad deriva al correo más conveniente.\nTrabajan con correos como OCA, Andesmar, Andreani, entre otros.",
      },
      {
        titulo: "TRANSFERENCIA",
        texto: "Debe realizar la compra seleccionando el pago vía transferencia. Una vez completados los datos, le llegará un email (le recomendamos revisar la casilla de spam) con la información para realizar el pago. Le pedimos que nos comparta el comprobante luego de concretarlo."
      }
    ];
      
      textosGenerales.forEach((texto) => {
        const contenedor = document.createElement("article");
        contenedor.classList.add("texto");
        contenedor.innerHTML = `<a class="btnDisparador btn btn-secondary mx-3 p-3" href="#" role="button">${texto.titulo}</a>`;
        botonesGenerales.appendChild(contenedor);
      
        const btn = contenedor.querySelector("a");
        btn.addEventListener("click", () => {
          navigator.clipboard.writeText(texto.texto)
            .then(() => {
              notification ();
            })
            .catch((error) => {
              console.error("Error al copiar al portapapeles: ", error);
            });
        });
      });
      

    /////////////////////////////////////////////////////
    //Toastify function //
    /////////////////////////////////////////////////////
    function notification () {
    Toastify({
      text: "COPIADO",
      duration: 3000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00Z09b, #96c93d)",
        
      },
      onClick: function(){} // Callback after click
    }).showToast();}