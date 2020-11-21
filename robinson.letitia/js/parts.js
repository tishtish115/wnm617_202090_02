

const makeAnimalList = templater(o=>`
<a href="#animal-profile-page" class="animallist-item">
   <div class="animallist-image">
      <img src="${o.img}" alt="">
   </div>
   <div class="animallist-description">
      <div class="animallist-name">${o.name}</div>
      <div class="animallist-type"><strong>typpe</strong> ${o.type}</div>
      <div class="animallist-breed"><strong>breed</strong> ${o.breed}</div>
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