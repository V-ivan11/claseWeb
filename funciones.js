function mayor3(a, b, c) {
    if (a >= b && a >= c) {
        document.write('<br>' + a);
    } else {
        if (b >= a && b >= c) {
            document.write('<br>' + b);
        } else {
            document.write('<br>' + c);
        }
    }
}

function paresN(N) {
    var i = 0;
    while (i <= N) {
        document.write(i, "\n");
        i += 2;
    }
}

function sumaN(N) {
    var suma = 0, i = 0;
    while (i <= N) {
        suma += i;
        i++;
    }
    document.write('<br>' + suma);
}

function insertionSort(D){
    for (var i = 1; i < D.length; i++) {
        var j = i;
        while(j > 0 && D[j] < D[j-1]){
            var aux = D[j];
            D[j] = D[j-1];
            D[j-1] = aux;
            j = j-1;
        }
    }
    return D;
}

function selectionSort(D){
    for (var i = 0; i < D.length; i++) {
        var min = i;
        for(var j = i; j < D.length; j++){
            if(D[min] > D[j]){
                min = j;
            }
        }
        var aux = D[min];
        D[min] = D[i];
        D[i] = aux;
    }
    return D;
}

function bubbleSort(D) {
    for (var i = 0; i < D.length-1; i++) {
        for(var j = 0; j < (D.length-i-1); j++){
            if(D[j]>D[j+1]){
                var aux = D[j];
                D[j] = D[j+1];
                D[j+1] = aux;
            }
        }
    }
    return D;
}