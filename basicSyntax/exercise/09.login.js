function login(input) {
    let userName = input[0];
    let password = '';

    for (let i = userName.length - 1; i >= 0; i--) {
        password += userName[i];
    }

    let index = 1;
    let command = input[index];

    while (command !== password) {
        if (index === 4) {
            console.log(`User ${userName} blocked!`);
            break;
        }
        console.log("Incorrect password. Try again.");

        command = input[++index];

    }
    if (command === password) {
        console.log(`User ${userName} logged in.`);
    }

}
login(['Acer', 'login', 'go', 'let me in', 'recA']);