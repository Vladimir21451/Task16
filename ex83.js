function reverseStr(str){
    //Создание функции прототипа
function ElectroDevice(power){
    this.color = 'black',
    this.weight = 'weight',
    this.power = 'power',
    this.turnOn = function(power){
        //alert('power' + ' ' + power);
        console.log('Устройство' + ' ' + power + 'вт' + ' '  + 'включено');
    }
    this.turnOff = function(){
        console.log('Устройство' + ' ' + power + 'вт' + ' '  + 'выключено');
    }
}
// Создание функции прототипа из первгог прототипа
function ElectronicDevice(power){
    this.brightness = 100,
    this.power = power
}
ElectronicDevice.prototype = new ElectroDevice();

 // Создание экземпляра лампы с первым прототипом 
const tableLamp = new ElectroDevice(60);
    this.weight = 1.5;
    this.power = 60;

// Создание экземпляра телевизора со вторым прототипом
    const tvReceiver = new ElectronicDevice();
       tvReceiver.power = 300,
        tvReceiver.weight = 2;
        tvReceiver.sound = 30;
        tvReceiver.setSound = function(weight){
        tvReceiver.sound = 45;
        console.log('Громкость телевизора увеличена до' + ' '  + tvReceiver.sound+'дб');
    }
    //tvReceiver.prototype = new ElectronicDevice();
    //tvReceiver.prototype = new ElectroDevice();
    
    tvReceiver.turnOn(tvReceiver.power);//Вызов экземпляром второго прототипа функции из первого
    tableLamp.turnOff(60);    //Вызов экземпляром  первого прототипа функции из первого
    tvReceiver.setSound(); //Вызов экземпляром второго прототипа собственной функции
    console.log(tvReceiver.power); 
    alert('Смотрите консоль и комментарии к коду');
}
