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

