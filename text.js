function startPrank() {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("terminal").style.display = "block";

    let logs = [
        "Connecting to Roblox servers...",
        "Bypassing firewall...",
        "Extracting password...",
        "Injecting virus...",
        "Scanning device...",
        "Uploading data...",
        "Account compromised!",
        "BANNED FOREVER!"
    ];

    let i = 0;
    let logBox = document.getElementById("log");

    let interval = setInterval(() => {
        logBox.innerHTML += logs[i] + "<br>";
        i++;

        if (i >= logs.length) {
            clearInterval(interval);
            setTimeout(showPopup, 1500);
        }
    }, 800);
}

function showPopup() {
    alert("🚨 Your Roblox account has been permanently banned!");

    setTimeout(() => {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }, 1000);
}