const express = require('express');
const router = express.Router();

const Profile = require('../../models/Profile');

// router.get('/', (req, res) => res.json({ message: 'Welcome to the profiles route'}))

// Read: All profiles
router.get('/', (req, res) => {
	Profile.find()
		.then(profiles => {
			res.json(profiles)
		})
		.catch(err => {
			res.status(500)
				.json({
					status: "error", 
					message: err
				});
		})
})

// Read: One profile - change to email param
router.get('/:email', (req, res) => {
	const { email } = req.params;
	Profile.findOne({ email })
		.then(profile => {
			if(!profile) {
				return res.status(404)
					.json({message: `Profile not found for ${email}`})
			}
			res.status(200)
				.json(profile)
		})
		.catch(err => {
			res.status(404)
				.json({ 
					message: "Profile not found" 
				});
		})
})

// Create: New profile
router.post('/', (req, res) => {
	const { firstName, lastName, email } = req.body;
	
	const newProfile = new Profile({
		firstName,
		lastName,
		email
	});
	newProfile.save()
		.then(profile => res.status(201).json(profile))
		.catch(err => {
			res.status(500)
				.json({
					status: "error",
					message: err
				});
		})
})

// Update: profile
router.put('/:email', (req, res) => {
	const { email } = req.params;
	const { firstName, lastName, aboutMe, age } = req.body;
	
	Profile.findOne({ email })
		.then(profile => {
			if(profile) {
				Profile.findOneAndUpdate(
					{ email }, 
					{$set: { firstName, lastName, aboutMe, age }},
					{new : true}
				).then(updatedProfile => res.json(updatedProfile))
			}
		})
		.catch(err => {
			res.status(500)
				.json({
					message: err
				});
		});
})

// Delete: profile
router.delete('/:email', (req, res) => {
	
	const { email } = req.params;
	
	Profile.findOne({ email })
		.then(profile => {
			profile.remove()
				.then(() => res.status(204)
					.json({ message: "Deletion successful" }))
				.catch(err => {
          res.status(500)
            .json({
              status: "error", 
              message: err
        		});
				})
		})
    .catch(err => {
    	res.status(500)
        .json({
          status: "error", 
          message: err
        });
    })
})

module.exports = router;