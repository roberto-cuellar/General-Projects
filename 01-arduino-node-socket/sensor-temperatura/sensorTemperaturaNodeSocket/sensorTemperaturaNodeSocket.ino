// Entradas 
int sensorLuz = 15;
int inicioFinPulsador = 44, emergenciaPulsador = 46;
// Actuadores
int actuador1 = 49, actuador2 = 51, actuador3 = 53;

void setup() {
  Serial.begin(9600); // Start the unidirectional 
  // Definición de entradas 
  pinMode(sensorLuz,INPUT);
  pinMode(inicioFinPulsador,INPUT);
  pinMode(emergenciaPulsador,INPUT);
  
  pinMode(actuador1, OUTPUT);
  pinMode(actuador2, OUTPUT);
  pinMode(actuador3, OUTPUT);
}

void loop() {
  signalVoltage = analogRead(TEMP_SENSOR);
  celsiusTemp = signalVoltage * 500/1024;
  Serial.println(celsiusTemp); 
  delay(500);
}
