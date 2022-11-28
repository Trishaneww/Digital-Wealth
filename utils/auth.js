// //only able to access when login
// //if not, moves to next command
// const withAuth = (req, res, next) => {
//     if (!req.session.loggedIn) {
//        res.redirect('/login')
//     } else {
//       next();
//     }
//   };
  
//   module.exports = withAuth;