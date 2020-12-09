

const drawAnimalList = (a,empty_phrase='Hey Dummy, add an animal.') => {
   $("#list-page .animallist")
      .html(a.length?makeAnimalList(a):empty_phrase);
}



const makeAnimalList = templater(o=>`
<a href="#animal-profile-page" class="animallist-item js-animal-jump" data-id="${o.id}">
   <div class="animallist-image">
      <img src="https://via.placeholder.com/300/3a9/fff?text=horse" alt="horse">
   </div>
   <div class="animallist-description">
      <div class="animallist-name">${o.name}</div>
      <div class="animallist-type"><strong>Type: </strong> ${o.type}</div>
      <div class="animallist-breed"><strong>Breed: </strong> ${o.breed}</div>
   </div>
</a>
`);


const makeUserProfile = templater(o=>`
<div class="profile-image">
   <img src="${o.img}" alt="">
</div>
<div class="profile-body">
   <div class="profile-name">${o.name}</div>
   <div class="profile-email"><strong>Email</strong>: ${o.email}</div>
</div>
<p><a href="#settings-page">Settings</a></p>
`);


const makeAnimalProfile = templater(o=>`
<div class="profile-image">
   <img src="${o.img}" alt="">
</div>
<div class="profile-body">
   <div class="profile-name">${o.name}</div>
   <div class="profile-type"><strong>Type: </strong>: ${o.type}</div>
   <div class="profile-breed"><strong>Breed: </strong>: ${o.breed}</div>
</div>
<div>
   <a href="#" class="js-animal-delete" data-id="${o.id}">Delete</a>
</div>
`);

const makeAnimalPopup = o=>`
<div class="display-flex">
<div>
   <img src="${o.img}" alt="" style="width:100px;height:100px">
</div>
<div style="padding-left:1em">
   <div class="profile-name">${o.name}</div>
   <div><strong>Type</strong>: ${o.type}</div>
   <div><strong>Breed</strong>: ${o.breed}</div>
</div>
</div>
<div>
<a href="#" class="form-button js-animal-jump" data-id="${o.animal_id}">Visit</a> 
</div>
`;



