// Entradas -----
int sensorLuz = 15, inicioFinPulsador = 2, tipoFuncPulsador = 3; // Sensor de luz , pulsador de inicio, pulsador de cambio a manual y viceversa
// Actuadores -----
int actuador1  = 44;
// Indicadores de Servicios -----
int indicadorOn = 31, indicadorAuto = 33; // Indicador se servicio activo y de funcionamiento automático
// Variables de estado
bool estadoServicio = false; // Almacena el estado actual del servicio (true => funcionando) (false => no funcionando)
bool funcAuto = true; // Especifica el comportamiento automático o nó del control de luz
int valSensor; // Valor actual del sensor de luz
int refSensor = 900; // Valor de referencia del sensor de luz (puede variar según la configuración del circuito que se utilice), TO DO: Configuración in situ 
int tolerancia = 25; // Tolerancia al valor de referencia anterior
int valorActuador1 = 0; // Inicialización del valor del actuador1


void setup(){
    // Definición de entradas y salidas en la placa -----

    // Definición de entradas 
    pinMode(sensorLuz,INPUT);
    pinMode(inicioFinPulsador,INPUT);
    pinMode(tipoFuncPulsador,INPUT);

    // Definición de indicadores
    pinMode(indicadorOn, OUTPUT);
    pinMode(indicadorAuto, OUTPUT);

    // Definición de Actuadores
    pinMode(actuador1, OUTPUT);

    // Inicialización de los actuadores y de la lectura del sensor principal
    analogWrite(actuador1,valorActuador1); 
    valSensor = analogRead(sensorLuz);

    // Inicialización del modo de funcionamiento del circuito
    digitalWrite(indicadorAuto,HIGH);

    // Inicialización del puerto serial 
    Serial.begin(9600); 

    // Interrupciones
    attachInterrupt(digitalPinToInterrupt(inicioFinPulsador),cambiarEstadoServicio,RISING); 
    attachInterrupt(digitalPinToInterrupt(tipoFuncPulsador),cambiarTipoFunc,RISING); 


}

void loop(){ // Loop principal

    // Servicio principal -------
    if(estadoServicio){ // En caso de que el servicio sea activado
        valSensor = analogRead(sensorLuz); // Lectura del sensor de luz
        Serial.println(valSensor); // Impresión en el puerto serial
        delay(50); // Espera de 500ms

        if(funcAuto){ // En caso de que el control esté seteado como automático
            if(valSensor > (refSensor + tolerancia) ){aumentarActuador1();};
            if(valSensor < (refSensor - tolerancia) ){disminuirActuador1();};
        }
    }

    // Lectura de entradas por el puerto serial ----------
    if ( Serial.available() > 0 ) {
        int entradaSerial = Serial.read();

        switch (entradaSerial) {
            case 'a':// Detener el servicio por el monitor serial
                detenerServicio();
                break;

            case 'b': // Reanudar el envío por el monitor serial
                iniciarServicio();
                break;    
                
            case 'c': // Test actuadores
                testActuador1();              
                break;         

            case 'd': // Aumentar Valor Actuador
                aumentarActuador1();              
                break;         
            case 'e': // Disminuir Valor Actuador
                disminuirActuador1();              
                break;      
            case 'f': // Cambiar tipo de funcionamiento
                cambiarTipoFunc();              
                break;     
      }

    }

}

// CALLBACKS PARA LAS INTERRUPCIONES -----

void cambiarEstadoServicio(){ /// Cambiar el estado del servicio físicamente
    estadoServicio = !estadoServicio;
    if(estadoServicio){// En caso de estar activo el servicio se activa el indicador, de otra forma se apaga
        digitalWrite(indicadorOn,HIGH);
        valorActuador1=0;
        analogWrite(actuador1,valorActuador1); 
    }else{
        digitalWrite(indicadorOn,LOW);
        valorActuador1=0;
        analogWrite(actuador1,valorActuador1); 
    }
    
}

void cambiarTipoFunc(){ /// Cambiar el estado del funcionamiento, automático o manual
    funcAuto = !funcAuto;
    funcAuto ? digitalWrite(indicadorAuto,HIGH) : digitalWrite(indicadorAuto,LOW); // En caso de estar activo el funcionamiento automático se activa el indicador, de otra forma se apaga
}

// FUNCIONES DE APOYO ----

void apagarActuadores(){
    valorActuador1=0;
    analogWrite(actuador1,valorActuador1); 
}

void encenderActuadores(){
    valorActuador1=255;
    analogWrite(actuador1,valorActuador1); 
}

void aumentarActuador1(){ // Aumentar el valor del actuator1
    if(estadoServicio){ // Esto es en caso de que se tenga una peticion por servidor y el servicio no esté activo
        if(valorActuador1 <= 254){
            valorActuador1 += 1;  // TO DO => Configurar la sensibilidad del incremento de forma manual y remota
        }
        analogWrite(actuador1,valorActuador1); 
    }
}


void disminuirActuador1(){ // Disminuir el valor del actuator1
    if(estadoServicio){ // Esto es en caso de que se tenga una peticion por servidor y el servicio no esté activo
        if(valorActuador1 >= 1){
            valorActuador1 -= 1;  // TO DO => Configurar la sensibilidad del incremento de forma manual y remota
        }
        analogWrite(actuador1,valorActuador1); 
    }
}

void detenerServicio(){
    estadoServicio = false;
    digitalWrite(indicadorOn,LOW);
    apagarActuadores();
}

void iniciarServicio(){
    estadoServicio = true;
    digitalWrite(indicadorOn,HIGH);
}

void testActuador1(){
    estadoServicio = false;
    digitalWrite(indicadorOn,LOW);
 for(int i=0; i<3; i++){
    apagarActuadores();
    delay(250);
    encenderActuadores();
    delay(250);  
    apagarActuadores();
  }
}