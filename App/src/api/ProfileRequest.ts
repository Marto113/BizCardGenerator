export async function profile() {
    // if (sessionStorage.getItem("itemId") == null) {
    //     return response.status(403).json("Password Incorrect");
    // }
    const url = 'https://localhost:44376/users/' + sessionStorage.getItem("itemId");
    return fetch(url, {
        mode: 'cors',
        method: 'GET',
        headers: {
            'accept': '*',
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${sessionStorage.getItem("itemToken")}`
        }
    }).then(response => response.json());
}