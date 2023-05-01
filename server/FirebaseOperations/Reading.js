const {db}=require('./Firebase')
const ref = db.ref('users');
// database.ref('users').on('child_added', (snapshot) => {
//   const newUser = snapshot.val();
//   console.log('New user added:', newUser);
// });

// Attach an asynchronous callback to read the data at our posts reference
ref.on('value', (snapshot) => {
  console.log(snapshot.val());
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
}); 

// when child added
// ref.on('child_added', (snapshot )=> {
//   const newUser = snapshot.val();
//   console.log("new user added ",newUser);
// });
ref.on('child_changed', (snapshot) => {
  const changedPost = snapshot.val();
  console.log('The updated post title is ' , changedPost);
});