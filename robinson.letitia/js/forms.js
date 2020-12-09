
//DOUBE CHECK THAT IT IS UR INFO IN HERE//
//DOUBE CHECK THAT IT IS UR INFO IN HERE//

const checkSignupForm = () => {
   let username = $("#signup-username").val();
   let email = $("#signup-email").val();
   let password = $("#signup-password").val();
   let passwordconfirm = $("#signup-password-confirm").val();

   if(password!=passwordconfirm) {
      throw "Passwords don't match";
   } else {
      query({type:'insert_user',params:[username,email,password]})
      .then(d=>{
         if(d.error) {
            throw d.error;
         }
         console.log(d.id)
         $.mobile.navigate("#signin-page");
      })
   }
}


//DOUBE CHECK THAT IT IS UR INFO IN HERE//
const checkUserEditForm = () => {
   let username = $("#user-edit-username").val();
   let name = $("#user-edit-name").val();
   let email = $("#user-edit-email").val();

   query({
      type:'update_user',
      params:[username,name,email,sessionStorage.userId]})
   .then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.go(-2);
   })
}


const checkAnimalAddForm = () => {
   let name = $("#animal-add-name").val();
   let type = $("#animal-add-type").val();
   let breed = $("#animal-add-breed").val();
   let description = $("#animal-add-description").val();


   query({
      type:'insert_animal',
      params:[sessionStorage.userId,name,type,breed,description]})
   .then(d=>{
      if(d.error) {
         throw d.error;
      }
      console.log(d.id)

      $("#animal-add-form")[0].reset();

      sessionStorage.animalId = d.id;
      $.mobile.navigate($("#animal-add-destination").val());
   })
}



const checkAnimalEditForm = () => {
   let name = $("#animal-edit-name").val();
   let type = $("#animal-edit-type").val();
   let breed = $("#animal-edit-breed").val();
   let description = $("#animal-edit-description").val();

   query({
      type:'update_animal',
      params:[name,type,breed,description,sessionStorage.animalId]})
   .then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.back();
   });
}

//DEC 1, 2020 class//

//const checkUpload = file =



const checkSearchForm = () => {
   //let 
}