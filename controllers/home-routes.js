const router = require('express').Router();
const { Review, User } = require('../models');

/* Asynchronously GET all user names and 
 * send the serialized data to the home view.
 */
router.get('/', async(req, res) => {
  try {
    const reviewData = await Review.findAll({
      include: [User]
    });

    if (reviewData) {
      const reviews = reviewData.map(review => review.get({ plain: true }));
      res.render('homepage', { reviews, loggedIn: req.session.loggedIn });
    }
    else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// if user logged in, takes them out the login page
router.get('/login', (req, res) => {
  (req.session.loggedIn) 
  ? res.redirect('/')
  : res.render('login');
});

// if user logged in, takes them out the signup page
router.get('/signup', (req, res) => {
  (req.session.loggedIn) 
  ? res.redirect('/')
  : res.render('signup');
})

module.exports = router;