// async function userData(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     const htmlValue = data.map(data => `<li>${data.email}</li>`).join("");
//     document.getElementById('container').innerHTML = `${htmlValue}`
//     console.log(data);
// }

// userData();


// async function cats(){
//     try {
//         const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME');
//         const data = await res.json();
//         console.log(data)
//         const value = data.map(data => `<img src = '${data.url}'/>`)
//         document.getElementById('container').innerHTML = `${value}`
//     } catch (error) {
//         console.log("Error:", error);
//     }
// }

// cats();


axios.get('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME').then(res=>{
   const value = res.data.map(data=>`<img src ='${data.url}'/>`);
    document.getElementById('container').innerHTML = `${value}`
})