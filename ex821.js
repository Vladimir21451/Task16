function ownproperty() {
const visitor ={
    district:'СВАО',
}
alert("Введен объект прототип 'visitor{district:'СВАО'}");
alert("Смотрите консоль" );
console.log(visitor.district);
//const reader = Object.create('visitor');
const reader = {
    ownDistrict: "САО"
};
reader.__proto__ = visitor;
reader.ownDistrict = 'САО';
reader.age = '45';
console.log(reader.ownDistrict);
console.log(reader.district);
alert(reader.ownDistrict);
alert(reader.district);
for(let key in reader){
    if(reader.hasOwnProperty(key)){console.log(key + ':' + reader[key]);
        alert( key + ': ' + reader[key]);
    }
}
}