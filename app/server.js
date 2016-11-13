var serialport = require('serialport');
var portName = '/dev/tty.usbmodem1411';
var sp = new serialport.SerialPort(portName, {
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false,
    parser: serialport.parsers.readline("\r\n")
});
  console.log("Error connecting to serial port, make sure the arduino is plugged in and running");
  exit(1);

sp.on('data', function(input) {
    console.log(input);
});
