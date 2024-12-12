var cachorros = ["Labrador", "poodle", "pitbull", "Pastor Alemao"]

function maioresQue7 (nome){
    return nome.filter (function (n){
        return n.length > 7
    })
}

console.log(maioresQue7(cachorros))