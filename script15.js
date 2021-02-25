function calculate() {
    var insert = document.getElementById("txt");
    var res = document.getElementById("res");
    if (insert.value.length == 0){
        window.alert("[ERROR] Please Insert a Number:")
    }else {
        res.innerHTML = `Multiplication Table: <br>`
        var i = Number(insert.value)
        for( var l = 1; l <=10; l++ ){
            var total = i*l
            res.innerHTML += `${i} X ${l} = ${total} <br>` 
        }
    }
}