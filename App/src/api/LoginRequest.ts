const url = 'https://localhost:44376/users/login';

export async function login(email: string, password: string): Promise<any> {
    return fetch(url, {
        mode: 'cors',
        method: 'POST',
        headers: {
            'accept': '*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    })
    .then(response => response.json());
}
