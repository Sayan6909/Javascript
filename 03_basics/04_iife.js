// Immediately Invoked Function Expression (IIFE)

// to remove the pollution of Global scope if i.e. whatever the declaration in global scope, to remove that 
// pollution IIFE is used


// ****Named IIFe****

(function random(){
    console.log(`DB Connected`);
})();

// to the end IIFE we have to use " ; "(Semi-colon)

// ****Un-named IIFE****
((name)=>{
    console.log(`DB Connected two ${name}`)
} )("Sayan")