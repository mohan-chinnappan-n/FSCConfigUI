/*
-------------------------------------------
   FABalUtil has features:
   - get the updated balance from the external RESTFul service
      by passing id and current balance to get new balance

   (mohan chinnappan,apr-09-2020, creation)
   MIT License
-------------------------------------------
*/

export class FABalUtil {
   getBal = (id, bal) => {
    // make sure: '/mohansun-rum.herokuapp.com' is in CSP Trusted Sites
    const url = `https://mohansun-rum.herokuapp.com/bal/${id}/${bal}`; 
    return fetch(url)   
        .then(response => { return response.json(); })  
        .then(result =>   { return result.bal; })
        ; 
};

}

