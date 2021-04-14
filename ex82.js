function istype(a) {
   const emptyObj = Object.create(null);
     emptyObj.distinct = 'СВАО';
     emptyObj.age = '45';
     //Просмотр всех элементов созданного объекта 
     alert ('Просмотр всех элементов созданного объекта');
     for(let key in emptyObj){
         console.log(key + ':' + emptyObj[key])
         alert(key + ':' + emptyObj[key]);
     }

}