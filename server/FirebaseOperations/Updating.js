const {db}   =require('../Firebase')
var ref = db.ref('myfolder')
const usersRef = ref.child('users');
usersRef.set({
  alanisawesome: {
    date_of_birth: 'June 23, 1912',
    full_name: 'Alan Turing'
  },
  gracehop: {
    date_of_birth: 'December 9, 1906',
    full_name: 'Grace Hopper'
  }
});

//to update child

// const usersRef = ref.child('users');
// usersRef.child('alanisawesome').set({
//   date_of_birth: 'June 23, 1912',
//   full_name: 'Alan Turing'
// });
// usersRef.child('gracehop').set({
//   date_of_birth: 'December 9, 1906',
//   full_name: 'Grace Hopper'
// });

//or

// const usersRef = ref.child('users');
// const hopperRef = usersRef.child('gracehop');
// hopperRef.update({
//   'nickname': 'Amazing Grace'
// });

// for printing
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});