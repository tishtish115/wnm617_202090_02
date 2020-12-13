

const makeMap = async (target, center={lat: 33.979560, lng: -84.3950845510611}) => {
   await checkData(()=>window.google);   

     //* latitude: '{{floating(-90.000001, 90)}}',//
   // longitude: '{{floating(-180.000001, 180)}}'*//  

   let map_el = $(target);

   if(!map_el.data('map'))
      map_el.data({
         "map":new google.maps.Map(map_el[0], {
            center: center,
            zoom: 12,
            disableDefaultUI: true
         }),
         "infoWindow":new google.maps.InfoWindow({content:''})
      });

   return map_el;
}



const makeMarkers = (map_el, map_locs) => {

   let map = map_el.data('map');
   let markers = map_el.data("markers");

   if(markers) markers.forEach(o=>o.setMap(null));

   markers = [];

   map_locs.forEach(o=>{
      console.log(o)
      let m = new google.maps.Marker({
         position: o,
         map: map,
         icon:{
            url:o.icon,
            scaledSize: {
               width:40,
               height:40
            }
         }
      });
      markers.push(m);
   });

   map_el.data("markers",markers);
   setTimeout(()=>setMapBounds(map_el, map_locs),150);
}


const setMapBounds = (map_el, map_locs) => {
   let map = map_el.data('map');
   let zoom = 14;

   if(map_locs.length==1) {
      map.setCenter(map_locs[0]);
      map.setZoom(zoom);
   } else if(map_locs.length==0) {
      if(window.location.protocol!=="https:"){
         return;
      } else {
         navigator.geolocation.getCurrentPosition(
            p=>{
               let pos = {
                  lat:p.coords.latitude,
                  lng:p.coords.longitude
               };
               map.setCenter(pos);
               map.setZoom(zoom);
            },
            (...args)=>{
               console.log("Error?",args);
            },{
               enableHighAccuracy:false,
               timeout:5000,
               maximumAge:0
            }
         );
      }
   } else {
      let bounds = new google.maps.LatLngBounds(null);
      map_locs.forEach(o=>{
         bounds.extend(o);
      });
      map.fitBounds(bounds);
   }
}




