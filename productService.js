const getProducts = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/v1/product')
        return response.json();
    } catch(e) {
        return Promise.reject(e);
    }
}

/*fetch('', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token'
    },
    body: JSON.stringify({
        pol1: 'a',
        pol2: 'b'
    })
})*/