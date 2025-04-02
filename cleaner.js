function reflex_agent(location, state) {
    if (state === "DIRTY") return "CLEAN";
    else if (location === "A") return "RIGHT";
    else if (location === "B") return "LEFT";
}

function test(statesCurrent, visitedStates) {
    const currentState = states.join();

    if (!visitedStates.includes(currentState)) {
        visitedStates.push(currentState);
        document.getElementById("log").innerHTML += `<br>Visited State: ${currentState}`;
    }

    // Detener el proceso si todos los estados posibles han sido visitados
    if (visitedStates.length === 8) {
        document.getElementById("log").innerHTML += "<br>All states visited! System halted.";
        return;
    }

    var location = statesCurrent[0];
    var state = location === "A" ? statesCurrent[1] : statesCurrent[2];
    var action_result = reflex_agent(location, state);

    document.getElementById("log").innerHTML += `<br>Location: ${location} | Action: ${action_result}`;

    if (action_result === "CLEAN") {
        if (location === "A") {
            statesCurrent[1] = "CLEAN";
        } else if (location === "B") {
            statesCurrent[2] = "CLEAN";
        }
    }else if(action_result=="DIRTY"){
        if (location === "A") {
            statesCurrent[1] = "DIRTY";
        } else if (location === "B") {
            statesCurrent[2] = "DIRTY";
        }
    } 
    else if (action_result === "RIGHT") {
        statesCurrent[0] = "B";
    } else if (action_result === "LEFT") {
        statesCurrent[0] = "A";
    }
    console.log(visitedStates);
    setTimeout(() => {
        test(statesCurrent, visitedStates);
    }, 1000);
}

var states = ["A", "DIRTY", "DIRTY"];
var visitedStates = [];
test(states, visitedStates);
