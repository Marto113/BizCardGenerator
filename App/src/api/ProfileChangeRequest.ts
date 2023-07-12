export async function profileChange(firstName: string, lastName: string, phone: string, email: string, password: string) {
    // if (sessionStorage.getItem("itemId") == null) {
    //     return response.status(403).json("Password Incorrect");
    // }
    const url = 'https://localhost:44376/users/' + sessionStorage.getItem("itemId");
    return fetch(url, {
        mode: 'cors',
        method: 'PATCH',
        headers: {
            'accept': '*',
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${sessionStorage.getItem("itemToken")}`
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            password: password
        })
    }).then(response => response.json());
}