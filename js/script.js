     const url = 'https://reqres.in/api/users'
     const section = document.querySelector('#mainSec')
     let apiData;
     fetch(url, {
     method: 'GET',
    })
         .then(response => {
             return response.json();
             //parsing our data
         })
         .then(data => {
            apiData = data
             //console.log(data);
             //Our parsed data
         })
         .catch(error => {
             console.log(error);
             //On error
         })
         .finally(() => {

            console.log(apiData.data[0]);
            for (let index = 0; index < apiData.data.length; index++) {
                
                
                section.innerHTML += `
                <article>
    <img src="${apiData.data[index].avatar}" alt="">
   <p>is this <span>${apiData.data[index].first_name}</span>?</p>

</article>
`

            }
             //When all is set and done
         })