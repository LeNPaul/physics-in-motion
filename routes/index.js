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

router.get('/classical-mechanics', (req, res) => {
    res.render('courses/classical-mechanics', {
      user : req.user,
      title : 'Classical Mechanics'
    });
});

router.get('/kinematics', (req, res) => {
    res.render('lessons/kinematics', {
      user : req.user,
      course : 'Classical Mechanics',
      course_url : 'classical-mechanics',
      title : 'Kinematics'
    });
});

router.get('/forces', (req, res) => {
    res.render('lessons/forces', {
      user : req.user,
      course : 'Classical Mechanics',
      course_url : 'classical-mechanics',
      title : 'Forces'
    });
});

router.get('/energy', (req, res) => {
    res.render('lessons/energy', {
      user : req.user,
      course : 'Classical Mechanics',
      course_url : 'classical-mechanics',
      title : 'Energy'
    });
});

router.get('/momentum', (req, res) => {
    res.render('lessons/momentum', {
      user : req.user,
      course : 'Classical Mechanics',
      course_url : 'classical-mechanics',
      title : 'Momentum'
    });
});

router.get('/simple-harmonic-motion', (req, res) => {
    res.render('lessons/simple-harmonic-motion', {
      user : req.user,
      course : 'Classical Mechanics',
      course_url : 'classical-mechanics',
      title : 'Simple Harmonic Motion'
    });
});

router.get('/waves', (req, res) => {
    res.render('lessons/waves', {
      user : req.user,
      course : 'Classical Mechanics',
      course_url : 'classical-mechanics',
      title : 'Waves'
    });
});

router.get('/fluids', (req, res) => {
    res.render('lessons/fluids', {
      user : req.user,
      course : 'Classical Mechanics',
      course_url : 'classical-mechanics',
      title : 'Fluids'
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
