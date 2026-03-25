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




// axios.get('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME').then(res=>{
//    const value = res.data.map(data=>`<img src ='${data.url}'/>`);
//     document.getElementById('container').innerHTML = `${value}`
// })

// const API_KEY = "AIzaSyAQd2EeAzLDuyYox0p-G-jNfaCdhzssA6I";
// const CHANNEL_ID = "UCE_M8A5yxnLfW0KghEeajjw";

// async function getData() {
//   const res = await fetch(
//     `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=5`
//   );
//   const data = await res.json()
//   console.log(data);

//  const response = data.map(data=>`<img src='${data.items[0].snippets.thumnails.high.url}'/>`);
//  console.log()

//  document.getElementById('container').innerHTML = `${response}`
// }
// getData();







// fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME')
// .then(res => res.json())
// .then(data=>{
//     console.log(data);
// })
// .catch(error=>{
//     console.log(error);
// })




// async function catData(){
//     try {
//         const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME')
        
//         const data = await res.json();
//         console.log(data);

//         const html = data.map(data => `<img src='${data.url}' />`)


//         document.getElementById('container').innerHTML = `${html}`;
        
//     } catch (error) {
//         console.log(error);
//     }
// }

// catData();


// Axios

axios.get('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME')
.then(res=>{
   const value = res.data.map(data=>`<img src ='${data.url}'/>`);
   console.log(res);
    document.getElementById('container').innerHTML = `${value}`
})
