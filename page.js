let playing = false;
let loaded = false;
let audioElem = document.getElementById("audio");
let btnBuzzer = document.getElementById("buzzer-play");
let buzzerIcon = document.getElementById("buzzer-icon");
let alertBox = "alert_notify_upload_file";

function handleFiles(event) {
    var files = event.target.files;
    $("#src").attr("src", URL.createObjectURL(files[0]));
    audioElem.load();

    loaded = true;
    wxp.hide(alertBox);
}

function changeAudioFileState() {
    if (!loaded) {
        wxp.setDialogParams("alert_notify_upload_file", "Wait there!", "Load a song by uploading a file first, then click the play button!");
        wxp.show(alertBox);
        
        return;
    }

    if (!playing) {
        audioElem.play();
        buzzerIcon.innerHTML = "stop_circle";
    } else {
        audioElem.pause();
        buzzerIcon.innerHTML = "play_circle";
    }
    
    playing = !playing;
}

function audioEndedPlayback() {
    playing = false;
    buzzerIcon.innerHTML = "play_circle";
}

wxp.hide(alertBox);

document.getElementById("upload").addEventListener("change", handleFiles, false);
audioElem.addEventListener("ended", audioEndedPlayback);
btnBuzzer.addEventListener("click", changeAudioFileState);