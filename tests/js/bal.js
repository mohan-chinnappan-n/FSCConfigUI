// bal.js

window.getBal = async () => {
  //const url = "https://mohansun-rum.herokuapp.com/bal/100/300";
  const url = "https://localhost:5001/bal/100/300"; // make sure certs are valid and in this site is in CSP
  let response = await fetch(url);
  return await response.json()
}
