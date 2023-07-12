import bcrypt from 'bcryptjs'

export async function login(email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 1);
    const url = 'https://localhost:44376/users/login';
    return fetch(url, {
        mode: 'cors',
        method: 'POST',
        headers: {
            'accept': '*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: <string>hashedPassword,
            // password: password,
        })
    })
    .then(response => saveIntoSessionStorage(response));
}

export async function saveIntoSessionStorage(resp: Response){
    console.log(resp);
    const respJson = await resp.json();
    console.log(respJson)
    sessionStorage.setItem("itemId", respJson.id);
    sessionStorage.setItem("itemToken", respJson.jwtToken);
    console.log(respJson.jwtToken);
}