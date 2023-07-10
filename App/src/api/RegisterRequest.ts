const url = 'https://localhost:44376/users/register';

export function register(firstName: string, lastName: string, phone: string, email: string, password: string){
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
            password: password,
        })
    })
    .then(response => response.json());
}
