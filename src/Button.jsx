// On-click-events

function doSomething(){
    console.log("Hello!");
}

function printBye(){
    console.log("Bye!");
}


export default function Button(){
    return(
        <div>
            <button onClick={doSomething}>Click me</button>
            <p onClick={printBye}>This para is for event demo</p>
        </div>
    )
}