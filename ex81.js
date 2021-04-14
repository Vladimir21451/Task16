function isnumber(a) {
   const reader={
      district: "СВАО",
      age: 45
   }
   function hasproperty(obj,str){
     // for(let key in obj){
      //   if(obj.hasOwnProperty(key)){console.log(key + ':' + obj[key]);
      //       alert( key + ': ' + obj[key]);
      //   }  
      if(str === "Вася"){alert('Передана строка совпадает с контрольной');
   }
      if(obj.hasOwnProperty(str)){alert('Свойство с именем ' + ' ' + str + ' ' + 'имеется')}
      else {alert('Свойство с именем ' + ' ' + str + ' ' + 'отсутствует');
   }
   }
   key1 = "Вася";
   hasproperty(reader, key1);
   key2 = 'age';
   hasproperty(reader, key2);
}