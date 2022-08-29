function receivesAFunction (callback){
    callback();
};

function returnsANamedFunction (){
    const named = function () {
        console.log("Hello");
    };
    return named;
};

function returnsAnAnonymousFunction(){
    return function (){
        console.log("Hello");
    };
};