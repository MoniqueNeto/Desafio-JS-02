function verificaTriângulo (ladoA, ladoB, ladoC) {
    if (ladoA == ladoB && ladoA == ladoC) {
        console.log("O triângulo é equilátero");
    } else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC) {
        console.log("O triângulo é isósceles");
    } else {
        console.log("O triângulo é escaleno");
    }
}