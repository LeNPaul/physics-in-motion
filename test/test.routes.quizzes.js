var should = require('should');
var assert = require('assert');
var chai = require('chai'), chaiHttp = require('chai-http');
var app = 'http://localhost:8080';
var user = {username: 'test@email.com', password: 'password'};
var quizzes = [
  {module_name: 'fluids', lesson_name: 'buoyancy', question_id: '1'},
  {module_name: 'fluids', lesson_name: 'buoyancy', question_id: '2'},
  {module_name: 'fluids', lesson_name: 'buoyancy', question_id: '3'},
  {module_name: 'fluids', lesson_name: 'buoyancy', question_id: '4'},
  {module_name: 'fluids', lesson_name: 'buoyancy', question_id: '5'},
  {module_name: 'fluids', lesson_name: 'continuity', question_id: '6'},
  {module_name: 'fluids', lesson_name: 'continuity', question_id: '7'},
  {module_name: 'fluids', lesson_name: 'continuity', question_id: '8'},
  {module_name: 'fluids', lesson_name: 'continuity', question_id: '9'},
  {module_name: 'fluids', lesson_name: 'continuity', question_id: '10'},
  {module_name: 'fluids', lesson_name: 'fluid_statics', question_id: '11'},
  {module_name: 'fluids', lesson_name: 'fluid_statics', question_id: '12'},
  {module_name: 'fluids', lesson_name: 'fluid_statics', question_id: '13'},
  {module_name: 'fluids', lesson_name: 'fluid_statics', question_id: '14'},
  {module_name: 'fluids', lesson_name: 'fluid_statics', question_id: '15'},
  {module_name: 'fluids', lesson_name: 'fluid_dynamics', question_id: '16'},
  {module_name: 'fluids', lesson_name: 'fluid_dynamics', question_id: '17'},
  {module_name: 'fluids', lesson_name: 'fluid_dynamics', question_id: '18'},
  {module_name: 'fluids', lesson_name: 'fluid_dynamics', question_id: '19'},
  {module_name: 'fluids', lesson_name: 'fluid_dynamics', question_id: '20'},
  {module_name: 'fluids', lesson_name: 'incompressible_fluids', question_id: '21'},
  {module_name: 'fluids', lesson_name: 'incompressible_fluids', question_id: '22'},
  {module_name: 'fluids', lesson_name: 'incompressible_fluids', question_id: '23'},
  {module_name: 'fluids', lesson_name: 'incompressible_fluids', question_id: '24'},
  {module_name: 'fluids', lesson_name: 'incompressible_fluids', question_id: '25'},
  {module_name: 'fluids', lesson_name: 'pressure', question_id: '26'},
  {module_name: 'fluids', lesson_name: 'pressure', question_id: '27'},
  {module_name: 'fluids', lesson_name: 'pressure', question_id: '28'},
  {module_name: 'fluids', lesson_name: 'pressure', question_id: '29'},
  {module_name: 'fluids', lesson_name: 'pressure', question_id: '30'},
  {module_name: 'waves', lesson_name: 'characteristics_waves', question_id: '31'},
  {module_name: 'waves', lesson_name: 'characteristics_waves', question_id: '32'},
  {module_name: 'waves', lesson_name: 'characteristics_waves', question_id: '33'},
  {module_name: 'waves', lesson_name: 'characteristics_waves', question_id: '34'},
  {module_name: 'waves', lesson_name: 'characteristics_waves', question_id: '35'},
  {module_name: 'waves', lesson_name: 'interference', question_id: '36'},
  {module_name: 'waves', lesson_name: 'interference', question_id: '37'},
  {module_name: 'waves', lesson_name: 'interference', question_id: '38'},
  {module_name: 'waves', lesson_name: 'interference', question_id: '39'},
  {module_name: 'waves', lesson_name: 'interference', question_id: '40'},
  {module_name: 'waves', lesson_name: 'superposition_of_waves', question_id: '41'},
  {module_name: 'waves', lesson_name: 'superposition_of_waves', question_id: '42'},
  {module_name: 'waves', lesson_name: 'superposition_of_waves', question_id: '43'},
  {module_name: 'waves', lesson_name: 'superposition_of_waves', question_id: '44'},
  {module_name: 'waves', lesson_name: 'superposition_of_waves', question_id: '45'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'damped_harmonic_motion', question_id: '46'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'damped_harmonic_motion', question_id: '47'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'damped_harmonic_motion', question_id: '48'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'damped_harmonic_motion', question_id: '49'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'damped_harmonic_motion', question_id: '50'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'driven_oscillations', question_id: '51'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'driven_oscillations', question_id: '52'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'driven_oscillations', question_id: '53'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'driven_oscillations', question_id: '54'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'driven_oscillations', question_id: '55'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'dynamics_simple_harmonic_motion', question_id: '56'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'dynamics_simple_harmonic_motion', question_id: '57'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'dynamics_simple_harmonic_motion', question_id: '58'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'dynamics_simple_harmonic_motion', question_id: '59'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'dynamics_simple_harmonic_motion', question_id: '60'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'the_pendulum', question_id: '61'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'the_pendulum', question_id: '62'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'the_pendulum', question_id: '63'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'the_pendulum', question_id: '64'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'the_pendulum', question_id: '65'},
  {module_name: 'kinematics', lesson_name: 'motion_in_one_dimension', question_id: '66'},
  {module_name: 'kinematics', lesson_name: 'motion_in_one_dimension', question_id: '67'},
  {module_name: 'kinematics', lesson_name: 'motion_in_one_dimension', question_id: '68'},
  {module_name: 'kinematics', lesson_name: 'motion_in_one_dimension', question_id: '69'},
  {module_name: 'kinematics', lesson_name: 'motion_in_one_dimension', question_id: '70'},
  {module_name: 'kinematics', lesson_name: 'motion_in_two_dimensions', question_id: '71'},
  {module_name: 'kinematics', lesson_name: 'motion_in_two_dimensions', question_id: '72'},
  {module_name: 'kinematics', lesson_name: 'motion_in_two_dimensions', question_id: '73'},
  {module_name: 'kinematics', lesson_name: 'motion_in_two_dimensions', question_id: '74'},
  {module_name: 'kinematics', lesson_name: 'motion_in_two_dimensions', question_id: '75'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_one_dimension', question_id: '76'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_one_dimension', question_id: '77'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_one_dimension', question_id: '78'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_one_dimension', question_id: '79'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_one_dimension', question_id: '80'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_two_dimensions', question_id: '81'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_two_dimensions', question_id: '82'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_two_dimensions', question_id: '83'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_two_dimensions', question_id: '84'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_two_dimensions', question_id: '85'},
  {module_name: 'energy', lesson_name: 'conservative_forces', question_id: '86'},
  {module_name: 'energy', lesson_name: 'conservative_forces', question_id: '87'},
  {module_name: 'energy', lesson_name: 'conservative_forces', question_id: '88'},
  {module_name: 'energy', lesson_name: 'conservative_forces', question_id: '89'},
  {module_name: 'energy', lesson_name: 'conservative_forces', question_id: '90'},
  {module_name: 'energy', lesson_name: 'energy_conservation_work', question_id: '91'},
  {module_name: 'energy', lesson_name: 'energy_conservation_work', question_id: '92'},
  {module_name: 'energy', lesson_name: 'energy_conservation_work', question_id: '93'},
  {module_name: 'energy', lesson_name: 'energy_conservation_work', question_id: '94'},
  {module_name: 'energy', lesson_name: 'energy_conservation_work', question_id: '95'},
  {module_name: 'energy', lesson_name: 'power', question_id: '96'},
  {module_name: 'energy', lesson_name: 'power', question_id: '97'},
  {module_name: 'energy', lesson_name: 'power', question_id: '98'},
  {module_name: 'energy', lesson_name: 'power', question_id: '99'},
  {module_name: 'energy', lesson_name: 'power', question_id: '100'},
  {module_name: 'energy', lesson_name: 'work_potential_energy', question_id: '101'},
  {module_name: 'energy', lesson_name: 'work_potential_energy', question_id: '102'},
  {module_name: 'energy', lesson_name: 'work_potential_energy', question_id: '103'},
  {module_name: 'energy', lesson_name: 'work_potential_energy', question_id: '104'},
  {module_name: 'energy', lesson_name: 'work_potential_energy', question_id: '105'},
  {module_name: 'forces', lesson_name: 'friction_drag', question_id: '106'},
  {module_name: 'forces', lesson_name: 'friction_drag', question_id: '107'},
  {module_name: 'forces', lesson_name: 'friction_drag', question_id: '108'},
  {module_name: 'forces', lesson_name: 'friction_drag', question_id: '109'},
  {module_name: 'forces', lesson_name: 'friction_drag', question_id: '110'},
  {module_name: 'forces', lesson_name: 'newtons_laws', question_id: '111'},
  {module_name: 'forces', lesson_name: 'newtons_laws', question_id: '112'},
  {module_name: 'forces', lesson_name: 'newtons_laws', question_id: '113'},
  {module_name: 'forces', lesson_name: 'newtons_laws', question_id: '114'},
  {module_name: 'forces', lesson_name: 'newtons_laws', question_id: '115'},
  {module_name: 'forces', lesson_name: 'simple_forces', question_id: '116'},
  {module_name: 'forces', lesson_name: 'simple_forces', question_id: '117'},
  {module_name: 'forces', lesson_name: 'simple_forces', question_id: '118'},
  {module_name: 'forces', lesson_name: 'simple_forces', question_id: '119'},
  {module_name: 'forces', lesson_name: 'simple_forces', question_id: '120'},
  {module_name: 'momentum', lesson_name: 'elastic_collisions', question_id: '121'},
  {module_name: 'momentum', lesson_name: 'elastic_collisions', question_id: '122'},
  {module_name: 'momentum', lesson_name: 'elastic_collisions', question_id: '123'},
  {module_name: 'momentum', lesson_name: 'elastic_collisions', question_id: '124'},
  {module_name: 'momentum', lesson_name: 'elastic_collisions', question_id: '125'},
  {module_name: 'momentum', lesson_name: 'explosions', question_id: '126'},
  {module_name: 'momentum', lesson_name: 'explosions', question_id: '127'},
  {module_name: 'momentum', lesson_name: 'explosions', question_id: '128'},
  {module_name: 'momentum', lesson_name: 'explosions', question_id: '129'},
  {module_name: 'momentum', lesson_name: 'explosions', question_id: '130'},
  {module_name: 'momentum', lesson_name: 'momentum_conservation', question_id: '131'},
  {module_name: 'momentum', lesson_name: 'momentum_conservation', question_id: '132'},
  {module_name: 'momentum', lesson_name: 'momentum_conservation', question_id: '133'},
  {module_name: 'momentum', lesson_name: 'momentum_conservation', question_id: '134'},
  {module_name: 'momentum', lesson_name: 'momentum_conservation', question_id: '135'},
]

chai.use(chaiHttp);

describe('routes/quizzes.js endpoints', () => {

  var agent = chai.request.agent(app);

  describe('/login endpoint', () => {
    it('log into user account', (done) => {
      agent.post('/login').send(user).end((err, res) => {
        res.status.should.be.equal(200);
        done();
      });
    });
  });

  describe('/questions endpoint', () => {

    it('requesting /questions without session cookie should not return user data', (done) => {
      chai.request(app).get('/questions/buoyancy').end((err, res) => {
        res.status.should.be.equal(500);
        done();
      });
    });

    it('requesting /questions with session cookie should return user data', (done) => {
      agent.get('/questions/buoyancy').end((err, res) => {
        res.status.should.be.equal(200);
        res.body.should.have.lengthOf(5);
        done();
      });
    });

  });

  describe('/answers endpoint', () => {

    it('requesting /answers without session cookie should not return user data', (done) => {
      chai.request(app).get('/answers/1').end((err, res) => {
        res.status.should.be.equal(500);
        done();
      });
    });

    it('requesting /answers with session cookie should return user data', (done) => {
      agent.get('/answers/1').end((err, res) => {
        res.status.should.be.equal(200);
        res.body.should.have.lengthOf(5);
        done();
      });
    });

  });

  describe('/submit_response endpoint', () => {

    it('requesting /submit_response without session cookie should not return user data', (done) => {
      chai.request(app).post('/submit_response').end((err, res) => {
        res.status.should.be.equal(500);
        done();
      });
    });

    // Loop through each quiz question
    //  Submitting a correct response should return true
    //  Submitting an incorrect response should return false
    describe('requesting /submit_response with session cookie should return user data', () => {

      for(let i=0; i < quizzes.length; i++) {
        describe('/submit_response for question with id of ' + quizzes[i].question_id, () => {

          // Make a request to the /answers API to get the answers
          // Make a call with the correct answer, and then one of the incorrect

          it('requesting /answers with session cookie should return user data', (done) => {
            agent.get('/answers/' + quizzes[i].question_id).end((err, res) => {
              res.status.should.be.equal(200);
              res.body.should.have.lengthOf(5);
              console.log(res.body[0]);
              done();
            });
          });

          var incorrect_answer_id;

          it('/submit_response with a correct answer should return true', (done) => {
            agent.post('/submit_response').send({question_id: quizzes[i].question_id, answer_id: '<placeholder>'}).end((err, res) => {
              res.status.should.be.equal(200);
              res.body.should.have.property('is_correct');
              res.body.is_correct.should.be.equal(true);
              done();
            });
          });

          it('/submit_response with an incorrect answer should return false', (done) => {
            agent.post('/submit_response').send({question_id: quizzes[i].question_id, answer_id: '<placeholder>'}).end((err, res) => {
              res.status.should.be.equal(200);
              res.body.should.have.property('is_correct');
              res.body.is_correct.should.be.equal(false);
              done();
            });
          });

        });
      };
    });

  });

  agent.close();

});
