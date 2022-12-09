function login() {
    let username = $('#login').val();
    let password = $('#password').val();

    if (!username && !password) {
        handleError('Username and password cannot be empty')
        return
    } else if (!username) {
        handleError('Username cannot be empty')
        return
    } else if (!password) {
        handleError('Password cannot be empty')
        return
    }
}

function handleError(msg) {
    if (!msg) { 
        console.log("KNS > message is null") 
        return
    }

    console.log("KNS > ", msg)
    $('.error').fadeIn(200);
    $('.error').text(msg);
}