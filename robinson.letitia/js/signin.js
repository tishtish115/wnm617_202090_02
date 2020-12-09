
//*const makeWarning = (target, message) => {
   //$(target).addClass("active")
   //.find(".message").html(message);
   //setTimeout(() =>{
      //$(target).removeClass("active")
  // }, 2000);
//}



const checkSigninForm = async () => {
   let user = $("#signin-username").val();
   let pass = $("#signin-password").val();

   console.log(user,pass)

   if(user=="" || pass=="") {
      makeWarning("#warning-modal","Type a Username and Password");
      return;
   }

   let found_user = await query({
      type:'check_signin',
      params:[user,pass]
   });

   if(found_user.result.length) {
      // logged in
      console.log('success');
      sessionStorage.userId = found_user.result[0].id;
      $("#signin-form")[0].reset();
   } else {
      // not logged in
      console.log('failure');
      sessionStorage.removeItem('userId');

      // DO SOMETHING HERE
      makeWarning("#warning-modal","Sign In Failed");

   }

   checkUserId();
}


const checkUserId = () => {
   let p = ['#signin-page','#signup-page',''];


   if(sessionStorage.userId === undefined) {
      // not logged in
      if(!p.some(o=>window.location.hash===o))
         $.mobile.navigate("#signin-page");
   } else {
      // logged in
      if(p.some(o=>window.location.hash===o)) {
         query({type: 'animals_by_user_id'})
         $.mobile.navigate("#recent-page");
      }
   }
}