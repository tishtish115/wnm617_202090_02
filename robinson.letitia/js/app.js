
//Make sure its whats on your page
// Document Ready
$(()=>{

   console.dir($("#user-edit-form")[0])

   //checkUserId();

   $(document)



   
   // ROUTES
   .on("pagecontainerbeforeshow",function(e,ui){
      console.log(ui.toPage[0].id)

      // Routing
      switch(ui.toPage[0].id) {
         case 'recent-page': RecentPage(); break;
         case 'list-page': ListPage(); break;

         case 'user-profile-page': UserProfilePage(); break;
         case 'user-edit-page': UserEditPage(); break;
         case 'user-upload-page': UserUploadPage(); break;

         case 'animal-profile-page': AnimalProfilePage(); break;
         case 'animal-edit-page': AnimalEditPage(); break;

         case 'location-add-page': LocationAddPage(); break;

      }
   })



   /* FORM SUBMISSIONS */

   // event delegation
   .on("submit","#signin-form",function(e){
      e.preventDefault();
      checkSigninForm();
   })
   .on("submit","#signup-form",function(e){
      e.preventDefault();
      checkSignupForm();
   })
   .on("submit","#list-search-form",function(e){
      e.preventDefault();
      checkSearchForm();
   })


  /* FORM SUBMIT BY BUTTON */

   .on("click",".js-animal-add",function(e){
      checkAnimalAddForm();
   })
   .on("click",".js-animal-edit",function(e){
      checkAnimalEditForm();
   })
   .on("click",".js-user-edit",function(e){
      checkUserEditForm();
   })
   .on("click",".js-location-add",function(e){
      checkLocationAddForm();
   })


 


   /* ANCHOR CLICKS */

   .on("click",".js-logout",function(e){
      sessionStorage.removeItem('userId');
      checkUserId();
   })

   .on("click",".js-animal-jump",function(e){
      sessionStorage.animalId = $(this).data("id");
      $.mobile.navigate("#animal-profile-page");
   })
   .on("click",".js-location-jump",function(e){
      sessionStorage.locationId = $(this).data("id");
      $.mobile.navigate("#location-profile-page");
   })
   .on("click",".js-animal-delete",function(e){
      checkAnimalDelete($(this).data("id"));
   })
   .on("click",".js-user-upload",function(e){
      checkUserUpload();
   })

   




   .on("click", "filter", function(e){
      checkUpload(this.files[0])
      .then(d=>{
         console.log(d)
         makeUploaderImage({
            namespace: 'user-upload',
            folder: 'uploads/',
            name:d.result

         })
      })
   })






   .on("click","[data-activate]",function(){
      let target = $(this).data('activate');
      $(target).addClass("active");
   })
   .on("click","[data-deactivate]",function(){
      let target = $(this).data('deactivate');
      $(target).removeClass("active");
   })
   .on("click","[data-toggle]",function(){
      let target = $(this).data('toggle');
      $(target).toggleClass("active");
   })
   ;

     $("[data-template]").each(function(){
      let target = $(this).data("template");
      let template = $(target).html();
      $(this).html(template);
   })




})