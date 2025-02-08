function reflex_agent(location, state) {
    if (state === "DIRTY") return "CLEAN";
    else if (location === "A") return "RIGHT";
    else if (location === "B") return "LEFT";
}

function test(states, visitedStates) {
    var location = states[0];
    var state = location === "A" ? states[1] : states[2];
    var action_result = reflex_agent(location, state);

    // Ejecutar la acción dependiendo del resultado
    if (action_result === "CLEAN") {
        if (location === "A") {
            states[1] = "CLEAN";
        } else if (location === "B") {
            states[2] = "CLEAN";
        }
    } else if (action_result === "RIGHT") {
        states[0] = "B";
    } else if (action_result === "LEFT") {
        states[0] = "A";
    }

    // Registrar el estado después de la acción
    const currentState = states.join();
    visitedStates.add(currentState);
    document.getElementById("log").innerHTML += `<br>Visited State: ${currentState}`;

    // Detener el proceso si todos los estados posibles han sido visitados
    if (visitedStates.size === 8) {
        document.getElementById("log").innerHTML += "<br>All states visited! System halted.";
        return;
    }
    console.log(visitedStates.size);
    // Llamar a la función nuevamente después de 3 segundos
    setTimeout(() => {
        test(states, visitedStates);
    }, 3000);
}

var states = ["A", "DIRTY", "DIRTY"];
var visitedStates = new Set();
test(states, visitedStates);
