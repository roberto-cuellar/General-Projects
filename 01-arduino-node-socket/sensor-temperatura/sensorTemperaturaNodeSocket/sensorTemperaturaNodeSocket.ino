// Entradas 
int sensorLuz = 15;
int inicioFinPulsador = 2, testPulsador = 3;
// Actuadores
int actuador1 = 49, actuador2 = 51, actuador3 = 53;
// Indicador de estadoServicioServicio
int indicadorOn = 31;
// Variables de estadoServicioServicio 
bool estadoServicio = false; // Inicia el proceso por defecto en false (NO SENSANDO)
int valSensor; // Variable para almacenar el valor del sensor de luz
int refSensor = 1010


void setup() {
  // Definición de entradas 
  pinMode(sensorLuz,INPUT);
  pinMode(inicioFinPulsador,INPUT);
  pinMode(testPulsador,INPUT);

  // Entrada mediante Interrupciones (Eventos en Js)

  // Definición de Actuadores
  pinMode(actuador1, OUTPUT);
  pinMode(actuador2, OUTPUT);
  pinMode(actuador3, OUTPUT);

  // Definición de indicadores
  pinMode(indicadorOn, OUTPUT);

  // Inicialización de los actuadores y de la lectura del sensor principal
  digitalWrite(actuador1,HIGH);
  digitalWrite(actuador2,HIGH);
  digitalWrite(actuador3,HIGH);
  valSensor = analogRead(sensorLuz);

  // Inicialización del puerto serial 
  Serial.begin(9600); 

  // Interrupciones
  // attachInterrupt(digitalPinToInterrupt(pin), callback, mode)
  attachInterrupt(digitalPinToInterrupt(inicioFinPulsador), cambiarEstadoServicio, RISING);
  // Pines de interrupciones en Arduino Mega 2560 2,13,18,19,20,21
  // https://www.arduino.cc/reference/en/language/functions/external-interrupts/attachinterrupt/

}

void loop() {
  if(estadoServicio){
    valSensor = analogRead(sensorLuz);
    Serial.println(valSensor); 
    delay(500); 
  }
 
  if ( Serial.available() > 0 ) {
// read the character and do what you need 
    //Serial.print("Incoming Message: ");
    int inByte = Serial.read();
    switch (inByte) {
      case 'a':// Parar el envío por el monitor serial
        estadoServicio = false;
        apagarActuadores();
        digitalWrite(indicadorOn,LOW);
        break;

      case 'b': // Reanudar el envío por el monitor serial
        estadoServicio = true;
        digitalWrite(indicadorOn,HIGH);
        break;    
        
      case 'c': // Test actuadores
        estadoServicio = false;
        digitalWrite(indicadorOn,LOW);
        testActuadores();              
        break;    
      
        

        
      
      }
    
  }

  
}

void cambiarEstadoServicio(){
  estadoServicio = !estadoServicio;
  if(estadoServicio){
    digitalWrite(indicadorOn,HIGH);
  }else{
    digitalWrite(indicadorOn,LOW);
  }
}


void controlManual(int color, int intensidad){
  
}


void apagarActuadores(){
  digitalWrite(actuador1,HIGH);
  digitalWrite(actuador2,HIGH);
  digitalWrite(actuador3,HIGH);
}

void encenderActuadores(){
  digitalWrite(actuador1,LOW);
  digitalWrite(actuador2,LOW);
  digitalWrite(actuador3,LOW);
}

void testActuadores(){
 for(int i=0; i<3; i++){
    apagarActuadores();
    delay(250);
    encenderActuadores();
    delay(250);  
    apagarActuadores();
  }
}
