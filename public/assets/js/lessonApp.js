// create the module and name it lessonApp
var lessonApp = angular.module('lessonApp', ['ngRoute']);

// configure our routes
lessonApp.config(function($routeProvider) {
  $routeProvider

  // Motion In One Dimension
  .when('/position', {
    templateUrl: 'curriculum/motion-in-one-dimension/position.html',
  })
  .when('/speed', {
    templateUrl: 'curriculum/motion-in-one-dimension/speed.html',
  })
  .when('/velocity', {
    templateUrl: 'curriculum/motion-in-one-dimension/velocity.html',
  })
  .when('/acceleration', {
    templateUrl: 'curriculum/motion-in-one-dimension/acceleration.html',
  })
  .when('/special-cases', {
    templateUrl: 'curriculum/motion-in-one-dimension/special-cases.html',
  })

  // Motion in Two Dimensions
  .when('/two-dimensional-position', {
    templateUrl: 'curriculum/motion-in-two-dimensions/two-dimensional-position.html',
  })
  .when('/two-dimensional-velocity', {
    templateUrl: 'curriculum/motion-in-two-dimensions/two-dimensional-velocity.html',
  })
  .when('/two-dimensional-acceleration', {
    templateUrl: 'curriculum/motion-in-two-dimensions/two-dimensional-acceleration.html',
  })
  .when('/projectile-motion', {
    templateUrl: 'curriculum/motion-in-two-dimensions/two-dimensional-projectile-motion.html',
  })

  //Forces
  .when('/the-laws-of-motion', {
    templateUrl: 'curriculum/forces-and-the-laws-of-motion/the-laws-of-motion.html',
  })
  .when('/first-law-of-motion', {
    templateUrl: 'curriculum/forces-and-the-laws-of-motion/first-law-of-motion.html',
  })
  .when('/second-law-of-motion', {
    templateUrl: 'curriculum/forces-and-the-laws-of-motion/second-law-of-motion.html',
  })
  .when('/third-law-of-motion', {
    templateUrl: 'curriculum/forces-and-the-laws-of-motion/third-law-of-motion.html',
  })
  .when('/common-forces', {
    templateUrl: 'curriculum/forces-and-the-laws-of-motion/common-forces.html',
  })
  .when('/friction-and-drag', {
    templateUrl: 'curriculum/forces-and-the-laws-of-motion/friction-and-drag.html',
  })

  // Circular Motion
  .when('/circular-motion', {
    templateUrl: 'curriculum/circular-motion/circular-motion.html',
  })

  // Work and Energy
  .when('/conservative-forces', {
    templateUrl: 'curriculum/work-and-energy/conservative-forces.html',
  })
  .when('/energy-conservation-work', {
    templateUrl: 'curriculum/work-and-energy/energy-conservation-work.html',
  })
  .when('/work-potential-energy', {
    templateUrl: 'curriculum/work-and-energy/work-potential-energy.html',
  })
  .when('/power', {
    templateUrl: 'curriculum/work-and-energy/power.html',
  })

  // Linear Momentum and Collisions
  .when('/momentum-conservation', {
    templateUrl: 'curriculum/linear-momentum-and-collisions/momentum-conservation.html',
  })
  .when('/elastic-collisions', {
    templateUrl: 'curriculum/linear-momentum-and-collisions/elastic-collisions.html',
  })
  .when('/explosions', {
    templateUrl: 'curriculum/linear-momentum-and-collisions/explosions.html',
  })

  // Rotational Motion and Angular Momentum
  .when('/angular-variables', {
    templateUrl: 'curriculum/rotational-motion-and-angular-momentum/angular-variables.html',
  })
  .when('/equations-of-rotational-motion', {
    templateUrl: 'curriculum/rotational-motion-and-angular-momentum/equations-of-rotational-motion.html',
  })
  .when('/rotational-kinetic-energy', {
    templateUrl: 'curriculum/rotational-motion-and-angular-momentum/rotational-kinetic-energy.html',
  })
  .when('/axis-theorems', {
    templateUrl: 'curriculum/rotational-motion-and-angular-momentum/axis-theorems.html',
  })
  .when('/torque', {
    templateUrl: 'curriculum/rotational-motion-and-angular-momentum/torque.html',
  })
  .when('/rotational-work-and-power', {
    templateUrl: 'curriculum/rotational-motion-and-angular-momentum/rotational-work-and-power.html',
  })
  .when('/angular-momentum', {
    templateUrl: 'curriculum/rotational-motion-and-angular-momentum/angular-momentum.html',
  })

  // Oscillations
  .when('/dynamics-simple-harmonic-motion', {
    templateUrl: 'curriculum/oscillations/dynamics-simple-harmonic-motion.html',
  })
  .when('/the-pendulum', {
    templateUrl: 'curriculum/oscillations/the-pendulum.html',
  })
  .when('/damped-harmonic-motion', {
    templateUrl: 'curriculum/oscillations/damped-harmonic-motion.html',
  })
  .when('/driven-oscillations', {
    templateUrl: 'curriculum/oscillations/driven-oscillations.html',
  })

  // Waves and Sounds
  .when('/characteristics-of-waves', {
    templateUrl: 'curriculum/waves-and-sounds/characteristics-waves.html',
  })
 .when('/superposition-of-waves', {
    templateUrl: 'curriculum/waves-and-sounds/superposition-of-waves.html',
  })
  .when('/interference', {
    templateUrl: 'curriculum/waves-and-sounds/interference.html',
  })

  // Fluid Mechanics
  .when('/pressure', {
    templateUrl: 'curriculum/fluid-mechanics/pressure.html',
  })
  .when('/buoyancy', {
    templateUrl: 'curriculum/fluid-mechanics/buoyancy.html',
  })
  .when('/continuity', {
    templateUrl: 'curriculum/fluid-mechanics/continuity.html',
  })
  .when('/fluid-statics', {
    templateUrl: 'curriculum/fluid-mechanics/fluid-statics.html',
  })
  .when('/fluid-dynamics', {
    templateUrl: 'curriculum/fluid-mechanics/fluid-dynamics.html',
  })

  // Electricity and Magnetism
  .when('/electric-charge', {
    templateUrl: 'curriculum/electricity-and-magnetism/electric-charge.html',
  })
  .when('/electric-fields', {
    templateUrl: 'curriculum/electricity-and-magnetism/electric-fields.html',
  })
  .when('/electric-potential', {
    templateUrl: 'curriculum/electricity-and-magnetism/electric-potential.html',
  })
  .when('/magnetic-fields', {
    templateUrl: 'curriculum/electricity-and-magnetism/magnetic-fields.html',
  })

  // Algebra
  .when('/symbols', {
    templateUrl: 'curriculum/algebra/symbols.html',
  })
  .when('/scientific-notation', {
    templateUrl: 'curriculum/algebra/scientific-notation.html',
  })
  .when('/significant-digits', {
    templateUrl: 'curriculum/algebra/significant-digits.html',
  })
  .when('/basic-algebra', {
    templateUrl: 'curriculum/algebra/basic-algebra.html',
  })

  // Trigonometry
  .when('/useful-geometric-relations', {
    templateUrl: 'curriculum/geometry/useful-geometric-relations.html',
  })
  .when('/pythagorean-theorem', {
    templateUrl: 'curriculum/geometry/pythagorean-theorem.html',
  })
  .when('/useful-trigonometric-relations', {
    templateUrl: 'curriculum/geometry/useful-trigonometric-relations.html',
  })
  .when('/vector-and-scalar-quantities', {
    templateUrl: 'curriculum/geometry/vector-and-scalar-quantities.html',
  })
  .when('/dot-and-cross-product', {
    templateUrl: 'curriculum/geometry/dot-and-cross-product.html',
  })

  // Calculus
  .when('/functions', {
    templateUrl: 'curriculum/calculus/functions.html',
  })
  .when('/derivatives', {
    templateUrl: 'curriculum/calculus/derivatives.html',
  })
  .when('/integrals', {
    templateUrl: 'curriculum/calculus/integrals.html',
  })

});

// create the controller and inject Angular's $scope
lessonApp.controller('mainController', function($scope, $http) {

  // Render LaTex when loading new view
	$scope.$watch(function(){
	  MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
	  return true;
	});

  function getAnswers(question_id) {
    return new Promise(function(resolve, reject) {
      $.get('/answers/' + question_id, function(answer_data, status) {
        resolve(answer_data);
      });
    });
  };

  function getQuestion(question_id) {
    return new Promise(function(resolve, reject) {
      $.get('/question/' + question_id, function(question_data, status) {
        resolve(question_data);
      });
    });
  };

  function getLessonName() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        var lessonData = document.querySelector("#lesson-module");
        var lesson = lessonData.dataset.lesson;
        resolve(lesson);
      }, 500);
    });
  };

  $scope.initiateQuiz = function() {
    // Clear here to reset quiz questions when changing modules
    $scope.questions = [];
    if(document.querySelector("#user-exists")) {
      getLessonName().then(function(resolve) {
    	   var lesson = resolve;
         $.get('/questions/' + lesson, function(question_data, status) {
           for (let i=0; i < question_data.length; i++) {
             $.get('/answers/' + question_data[i].question_id, function(answer_data, status) {
               getAnswers(question_data[i].question_id).then(function(resolve) {
                 getQuestion(question_data[i].question_id).then(function(resolve) {
                   $scope.questions.push({question_id: question_data[i].question_id, question_text: resolve.question_text, content: answer_data});
                   $scope.$digest();
                 });
               });
             });
           };
         });
      })
    }
  }

  $scope.submitAnswer = function(question_id) {
    var radios = document.getElementsByName('question-' + question_id);
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        $http.post('/submit_response', {question_id: question_id, answer_id: radios[i].value}, {}).then(
          function(response){
            if(response.data.is_correct == true) {
              document.getElementById('style-' + question_id).textContent="Correct!";
              document.getElementById('style-' + question_id).className = "alert alert-success mt-3";
            } else {
              document.getElementById('style-' + question_id).textContent="Incorrect!";
              document.getElementById('style-' + question_id).className = "alert alert-danger mt-3";
            }
          },
          function(response){
            // TODO: Add proper error handling
          }
        );
        break;
      }
    }
  };

});
