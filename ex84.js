function randomInteger(min, max) {
  //Сздание класса прототипа
    class ElectroDevice{
      constructor(color,weight,power){
        this.color = color;
        this.weight = weight;
        this.power = power;
        }
        turnOn(power){
          console.log('Устройство' + ' ' + power + 'вт' + ' '  + 'включено');
        }
        turnOff(power){
          console.log('Устройство' + ' ' + power + 'вт' + ' '  + 'выключено');
      }
    }
    //Создание второго класса прототипа из первого прототипа
      class ElectronicDevice extends ElectroDevice {
        constructor(color,weight,power,brightness,sound){
          super(color,weight,power)
          this. brightness=100;
          this.sound = 30;
        } 
        setSound (sound){
          tvReceiver.sound = 45;
          console.log('Громкость телевизора увеличена до' + ' '  + tvReceiver.sound+'дб'); 
        }
        }
    // Создание объекта класса ElectroDevice
    const tableLamp = new ElectroDevice('black',1.5,60);
    //Создание объекта класса ElectronicDevice;
    const tvReceiver = new ElectronicDevice('black',2,300,100,30);
    //Вызов функции класса ElectroDevice
    tableLamp.turnOn(tableLamp.power); //Вызов функции первого прототипа из экземпляра класса первого прототипа
    tvReceiver.turnOff(tvReceiver.power); //Вызов функции первого прототипа из экземпляра класса второго прототипа
    tvReceiver.setSound(); //Вызов функции второго прототипа из экземпляра класса второго прототипа
    console.log(tvReceiver.power);
    alert('Смотрите консоль и комментарии к коду');
  }