
const RecentPage = async() => {

   let d = await query({
      type:'recent_locations',
      params:[sessionStorage.userId]
   });

   console.log(d)

   await checkData(()=>window.google);

   new google.maps.Map $("#recent-page .map"),[0] {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,

     });

   }


   // async and await
const ListPage = async() => {
   let d = await query({
      type:'animals_by_user_id',
      params:[sessionStorage.userId]
   });

   console.log(d)

   $("#list-page .animallist")
      .html(makeAnimalList(d.result));
}

   let valid_animals = d.result.reduce((r,o)=>{
   	o.icon = o.img;
   	 if(o.lat && o.lng) r.push(0);
   	 return r;

   },[])


   let map_el = await makeMap("#recent-page .map");

   //console.log(map_el.data('map'))

   makeMarkers(map_el,d.result);

}












const UserProfilePage = async() => {
   let d = await query({
      type:'user_by_id',
      params:[sessionStorage.userId]
   });

   console.log(d)

   $("#user-profile-page .profile")
      .html(makeUserProfile(d.result));
}






const AnimalProfilePage = async() => {
   let d = await query({
      type:'animal_by_id',
      params:[sessionStorage.animalId]
   });

   console.log(d)

   $("#animal-profile-page .profile")
      .html(makeAnimalProfile(d.result));

   makeMap("#animal-profile-page .map")
}