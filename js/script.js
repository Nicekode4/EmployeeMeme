     const url = 'https://reqres.in/api/users'

     fetch(url, {
     method: 'POST',
     headers: {
        'Content-Type': 'application/json'
     },
     body: JSON.stringify({
        name: 'PH'
     })
    })
         .then(response => {
             return response.json();
             //parsing our data
         })
         .then(data => {
             console.log(data);
             //Our parsed data
         })
         .catch(error => {
             console.log(error);
             //On error
         })
         .finally(() => {
             //When all is set and done
         })