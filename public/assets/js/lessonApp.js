// create the module and name it lessonApp
var lessonApp = angular.module('lessonApp', ['ngRoute']);

// configure our routes
lessonApp.config(function($routeProvider) {
  $routeProvider

  // Kinematics
  .when('/motion-in-one-dimension', {
    templateUrl: 'curriculum/kinematics/motion-in-one-dimension.html',
  })
  .when('/simple-motion-in-one-dimension', {
    templateUrl: 'curriculum/kinematics/simple-motion-in-one-dimension.html',
  })
  .when('/simple-motion-in-two-dimensions', {
    templateUrl: 'curriculum/kinematics/simple-motion-in-two-dimensions.html',
  })
  .when('/motion-in-two-dimensions', {
    templateUrl: 'curriculum/kinematics/motion-in-two-dimensions.html',
  })

  //Forces
  .when('/newtons-laws', {
    templateUrl: 'curriculum/forces/newtons-laws.html',
  })
  .when('/simple-forces', {
    templateUrl: 'curriculum/forces/simple-forces.html',
  })
  .when('/friction-drag', {
    templateUrl: 'curriculum/forces/friction-drag.html',
  })

  //Energy
  .when('/conservative-forces', {
    templateUrl: 'curriculum/energy/conservative-forces.html',
  })
  .when('/energy-conservation-work', {
    templateUrl: 'curriculum/energy/energy-conservation-work.html',
  })
  .when('/work-potential-energy', {
    templateUrl: 'curriculum/energy/work-potential-energy.html',
  })
  .when('/power', {
    templateUrl: 'curriculum/energy/power.html',
  })

  // Momentum
  .when('/momentum-conservation', {
    templateUrl: 'curriculum/momentum/momentum-conservation.html',
  })
  .when('/elastic-collisions', {
    templateUrl: 'curriculum/momentum/elastic-collisions.html',
  })
  .when('/explosions', {
    templateUrl: 'curriculum/momentum/explosions.html',
  })

  // Simple Harmonic Motion
  .when('/dynamics-simple-harmonic-motion', {
    templateUrl: 'curriculum/simple-harmonic-motion/dynamics-simple-harmonic-motion.html',
  })
  .when('/the-pendulum', {
    templateUrl: 'curriculum/simple-harmonic-motion/the-pendulum.html',
  })
  .when('/damped-harmonic-motion', {
    templateUrl: 'curriculum/simple-harmonic-motion/damped-harmonic-motion.html',
  })
  .when('/driven-oscillations', {
    templateUrl: 'curriculum/simple-harmonic-motion/driven-oscillations.html',
  })

  // Waves
  .when('/characteristics-waves', {
    templateUrl: 'curriculum/waves/characteristics-waves.html',
  })
 .when('/superposition-of-waves', {
    templateUrl: 'curriculum/waves/superposition-of-waves.html',
  })
  .when('/interference', {
    templateUrl: 'curriculum/waves/interference.html',
  })

  // Fluids
  .when('/pressure', {
    templateUrl: 'curriculum/fluids/pressure.html',
  })
  .when('/buoyancy', {
    templateUrl: 'curriculum/fluids/buoyancy.html',
  })
  .when('/continuity', {
    templateUrl: 'curriculum/fluids/continuity.html',
  })
  .when('/fluid-statics', {
    templateUrl: 'curriculum/fluids/fluid-statics.html',
  })
  .when('/fluid-dynamics', {
    templateUrl: 'curriculum/fluids/fluid-dynamics.html',
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
