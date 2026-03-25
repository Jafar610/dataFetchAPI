async function userData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const htmlValue = data.map(data => `<li>${data.email}</li>`).join("");
    document.getElementById('container').innerHTML = `${htmlValue}`
    console.log(data);
}

userData();