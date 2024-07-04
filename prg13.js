// 18. JSON : (javascript object notation open standard file format) 
    // (used to exchage data)
    // (json la string madhe convert karun send/transport  kela jato ani import karun object madhe convert karu shakto)
    // json standard reqiures doble qoutes


// object
obj = { nm : "prathamesh", srnm : "karnade", age : 20 };
console.log(obj);
console.log(typeof(obj));

// json 
jso = JSON.stringify(obj);
console.log(jso);
console.log(typeof(jso));

// parse
// parsed = JSON.parse(jso);
parsed = JSON.parse(`{ nm : "prathamesh", srnm : "karnade", age : 20 }`);
console.log(parsed);
console.log(typeof(parsed));



// javascript versions 
    // 1. ECMA script 