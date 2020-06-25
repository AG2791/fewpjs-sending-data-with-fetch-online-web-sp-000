// Add your code here
// Add your code here
function submitData( name, email ) {
               
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
         //data sent  between client and server needs to be a string, hence stringify.
          name,
          email
        } )
      } )
      .then( function ( response ) {
        return response.json()
      } )
    //   this is the reponse from server =, it converts the body of the response from JSON to a plain old JavaScript object
      .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
        //   diplay server response 
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
//    error in fetch(), using catch prevents JS from failing silently. 

  }