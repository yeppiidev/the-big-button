const showParent = (caller) => {
    caller.parentElement.style.display = 'block';
}

const hideParent = (caller) => {
    caller.parentElement.style.display = 'none';
}

const show = (id) => {
    document.getElementById(id).style.display = 'block';
}

const hide = (id) => {
    document.getElementById(id).style.display = 'none';
}

const setDialogParams = (id, title, message) => {
    let dialog = document.getElementById("alert_notify_upload_file");

    let dialogTitle = dialog.querySelectorAll(".alert_title")[0];
    let dialogMessage = dialog.querySelectorAll(".alert_message")[0];

    dialogTitle.innerHTML = title;
    dialogMessage.innerHTML = message;
}

const wxp = {
    hide,
    show,
    hideParent,
    showParent,
    setDialogParams
}