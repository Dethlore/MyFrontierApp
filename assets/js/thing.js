console.log('Thing: Good morning Buttercup.');

function saveDoc(data) {
    $.ajax({
        url: 'https://httpbin.org/post',
        data: data,
        type: 'POST',
        dataType: "json",
        success: function (params) {
            console.log(params);
            document.getElementById("ajaxCalled").innerHTML = "Form has been saved!";
        }
    })
}

var w;

function startWorker() {
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("js/demo_workers.js");
        }
        w.onmessage = function(event) {
            document.getElementById("result").innerHTML = event.data;
        };
    } else {
        document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
    }
}

function stopWorker() {
    w.terminate();
    w = undefined;
}

function WebSocketTest()
{
    if ("WebSocket" in window)
    {
        console.log("WebSocket is supported by your Browser!");

        // Let us open a web socket
        var ws = new WebSocket("wss://echo.websocket.org");

        ws.onopen = function()
        {
            // Web Socket is connected, send data using send()
            ws.send("Hello World!");
            console.log("Message is sent...");
        };

        ws.onmessage = function (evt)
        {
            var received_msg = evt.data;
            console.log("Message is received... '" + received_msg + "'");
        };

        ws.onclose = function()
        {
            // websocket is closed.
            console.log("Connection is closed...");
        };
    }

    else
    {
        // The browser doesn't support WebSocket
        console.log("WebSocket NOT supported by your Browser!");
    }
}