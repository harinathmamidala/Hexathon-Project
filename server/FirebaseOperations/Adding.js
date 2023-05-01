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


// for printing
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});