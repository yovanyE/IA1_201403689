function reflex_agent(location, state) {
    if (state === "DIRTY") return "CLEAN";
    else if (location === "A") return "RIGHT";
    else if (location === "B") return "LEFT";
}

function test(states, visitedStates) {

    const currentState =JSON.stringify(states);

    if (!visitedStates.has(currentState)) {
        visitedStates.add(currentState);
        document.getElementById("log").innerHTML += `<br>Visited State: ${currentState}`;
    }

    // Detener el proceso si todos los estados posibles han sido visitados
    if (visitedStates.size === 8) {
        document.getElementById("log").innerHTML += "<br>All states visited! System halted.";
        return;
    }

    var location = states[0];
    var state = location === "A" ? states[1] : states[2];
    var action_result = reflex_agent(location, state);

    // Revisar si no queda ninguna acción relevante por hacer

    document.getElementById("log").innerHTML += `<br>Location: ${location} | Action: ${action_result}`;

    if (action_result === "CLEAN") {
        if (location === "A") { 
            states[1] = "CLEAN";
        }
        else if (location === "B") {
            states[2] = "CLEAN";
        }
    } else if (action_result === "RIGHT"){
        states[0] = "B";
    } 
    else if (action_result === "LEFT")
    { 
        states[0] = "A";
    }

    setTimeout(() => {
        test(states, visitedStates);
    }, 2000);
}

var states = ["A", "DIRTY", "DIRTY"];
var visitedStates = new Set();
test(states, visitedStates);
