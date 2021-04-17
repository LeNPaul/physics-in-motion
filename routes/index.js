const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
      user : req.user,
      title : 'Physics in Motion | How physics should be taught'
     });
});

router.get('/about', (req, res) => {
    res.render('home/about', {
      user : req.user,
      title : 'About Us | Physics in Motion'
    });
});

router.get('/contact', (req, res) => {
    res.render('home/contact', {
      user : req.user,
      title : 'Contact | Physics in Motion'
    });
});

router.get('/privacy', (req, res) => {
    res.render('home/privacy', {
      user : req.user,
      title : 'Privacy | Physics in Motion'
    });
});

router.get('/terms', (req, res) => {
    res.render('home/terms', {
      user : req.user,
      title : 'Terms | Physics in Motion'
    });
});

// User notes

router.get('/notes/:course', (req, res) => {
    res.render('dashboard/notes', {
      user : req.user,
      course : req.params.course,
      title : 'Notes'
     });
});

// User settings

router.get('/settings', (req, res) => {
    res.render('dashboard/settings', {
      user : req.user,
      title : 'Settings'
    })
});

// Curriculum

router.get('/courses', (req, res) => {
    res.render('courses/courses', {
      user : req.user,
      title : 'Courses'
    });
});

// Classical Mechanics

router.get('/introductory-physics', (req, res) => {
    res.render('courses/introductory-physics', {
      user : req.user,
      title : 'Introductory Physics'
    });
});


router.get('/motion-in-one-dimension/position-distance-displacement', (req, res) => {
    res.render('lessons/motion-in-one-dimension/position-distance-displacement', {
      user : req.user,
      course : 'Introductory Physics',
      course_url : '../introductory-physics',
      title : 'Position, Distance, and Displacement'
    });
});

router.get('/motion-in-one-dimension/speed-velocity', (req, res) => {
    res.render('lessons/motion-in-one-dimension/speed-velocity', {
      user : req.user,
      course : 'Introductory Physics',
      course_url : '../introductory-physics',
      title : 'Speed and Velocity'
    });
});

router.get('/motion-in-one-dimension/acceleration', (req, res) => {
    res.render('lessons/motion-in-one-dimension/acceleration', {
      user : req.user,
      course : 'Introductory Physics',
      course_url : '../introductory-physics',
      title : 'Acceleration'
    });
});

router.get('/motion-in-two-dimensions/two-dimensional-position', (req, res) => {
    res.render('lessons/motion-in-two-dimensions/two-dimensional-position', {
      user : req.user,
      course : 'Introductory Physics',
      course_url : '../introductory-physics',
      title : 'Position'
    });
});

router.get('/motion-in-two-dimensions/two-dimensional-velocity', (req, res) => {
    res.render('lessons/motion-in-two-dimensions/two-dimensional-velocity', {
      user : req.user,
      course : 'Introductory Physics',
      course_url : '../introductory-physics',
      title : 'Velocity'
    });
});

router.get('/motion-in-two-dimensions/two-dimensional-acceleration', (req, res) => {
    res.render('lessons/motion-in-two-dimensions/two-dimensional-acceleration', {
      user : req.user,
      course : 'Introductory Physics',
      course_url : '../introductory-physics',
      title : 'Acceleration'
    });
});


router.get('/motion-in-one-dimension', (req, res) => {
    res.render('lessons/motion-in-one-dimension', {
      user : req.user,
      course : 'Introductory Physics',
      course_url : 'introductory-physics',
      title : 'Motion In One Dimension'
    });
});

router.get('/motion-in-two-dimensions', (req, res) => {
    res.render('lessons/motion-in-two-dimensions', {
      user : req.user,
      course : 'Introductory Physics',
      course_url : 'introductory-physics',
      title : 'Motion In Two Dimensions'
    });
});

router.get('/forces-and-the-laws-of-motion', (req, res) => {
    res.render('lessons/forces-and-the-laws-of-motion', {
      user : req.user,
      course : 'Introductory Physics',
      course_url : 'introductory-physics',
      title : 'Forces and the Laws of Motion'
    });
});

router.get('/circular-motion', (req, res) => {
    res.render('lessons/circular-motion', {
      user : req.user,
      course : 'Introductory Physics',
      course_url : 'introductory-physics',
      title : 'Circular Motion'
    });
});

router.get('/work-and-energy', (req, res) => {
    res.render('lessons/work-and-energy', {
      user : req.user,
      course : 'Introductory Physics',
      course_url : 'introductory-physics',
      title : 'Work and Energy'
    });
});

router.get('/linear-momentum-and-collisions', (req, res) => {
    res.render('lessons/linear-momentum-and-collisions', {
      user : req.user,
      course : 'Introductory Physics',
      course_url : 'introductory-physics',
      title : 'Linear Momentum and Collisions'
    });
});

router.get('/rotational-motion-and-angular-momentum', (req, res) => {
    res.render('lessons/rotational-motion-and-angular-momentum', {
      user : req.user,
      course : 'Introductory Physics',
      course_url : 'introductory-physics',
      title : 'Rotational Motion and Angular Momentum'
    });
});

router.get('/oscillations', (req, res) => {
    res.render('lessons/oscillations', {
      user : req.user,
      course : 'Introductory Physics',
      course_url : 'introductory-physics',
      title : 'Oscillations'
    });
});

router.get('/waves-and-sounds', (req, res) => {
    res.render('lessons/waves-and-sounds', {
      user : req.user,
      course : 'Introductory Physics',
      course_url : 'introductory-physics',
      title : 'Waves and Sounds'
    });
});

router.get('/electricity-and-magnetism', (req, res) => {
    res.render('lessons/electricity-and-magnetism', {
      user : req.user,
      course : 'Introductory Physics',
      course_url : 'introductory-physics',
      title : 'Electricity and Magnetism'
    });
});

router.get('/fluid-mechanics', (req, res) => {
    res.render('lessons/fluid-mechanics', {
      user : req.user,
      course : 'Introductory Physics',
      course_url : 'introductory-physics',
      title : 'Fluid Mechanics'
    });
});

// Mathematics

router.get('/mathematics', (req, res) => {
    res.render('courses/mathematics', {
      user : req.user,
      title : 'Mathematics'
     });
});

router.get('/algebra', (req, res) => {
    res.render('lessons/algebra', {
      user : req.user,
      course : 'Mathematics',
      course_url : 'mathematics',
      title : 'Algebra'
     });
});

router.get('/geometry', (req, res) => {
    res.render('lessons/geometry', {
      user : req.user,
      course : 'Mathematics',
      course_url : 'mathematics',
      title : 'Geometry'
     });
});

router.get('/calculus', (req, res) => {
    res.render('lessons/calculus', {
      user : req.user,
      course : 'Mathematics',
      course_url : 'mathematics',
      title : 'Calculus'
     });
});

// Resources

router.get('/resources', (req, res) => {
    res.render('courses/resources', {
      user : req.user,
      title : 'Resources'
     });
});

module.exports = router;
