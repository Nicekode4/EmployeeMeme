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
                <article class="back">
    <img src="${apiData.data[index].avatar}" alt="">
   <p>is this <span>${apiData.data[index].first_name}</span>?</p>

</article>
`

            }
            for (let index = 0; index < document.querySelectorAll('article').length; index++) {
                const element = document.querySelectorAll('article')[index];
                element.addEventListener('click', function () {
                if (element.classList[0] == "back") {
                                  
                
                    element.classList.toggle('back')
                    element.innerHTML = `<img src="${apiData.data[index].avatar}" alt="">
                    <p>is this <span>${apiData.data[index].first_name}</span>?</p>`
                     
                }else{
                    
                    element.classList.toggle('back')
                        element.innerHTML = `<h2>${apiData.data[index].email}</h2>
                        <h3>is this an email?</h3>`

                        
      
                }
           
            })
             //When all is set and done
          }
        })