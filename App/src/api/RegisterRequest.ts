import bcrypt from 'bcryptjs'
const url = 'https://localhost:44376/users/register';

export async function register(firstName: string, lastName: string, phone: string, email: string, password: string){
    const hashedPassword = await bcrypt.hash(password, 1);
    console.log(hashedPassword);

    return fetch(url, {
        mode: 'cors',
        method: 'POST',
        headers: {
            'accept': '*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            password: hashedPassword,
        })
    })
    .then(response => saveIntoSessionStorage(response));
}

export async function saveIntoSessionStorage(resp: Response){
    const respJson = await resp.json();
    console.log(respJson)
    sessionStorage.setItem("itemId", respJson.id);
    sessionStorage.setItem("itemToken", respJson.jwtToken);
    console.log(respJson.jwtToken);
}

