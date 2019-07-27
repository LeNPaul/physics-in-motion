const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// TODO - get child schema to work properly and simplify code
const LessonProperties = new Schema({
  status: { type: Boolean, default: false },
  updated: Date,
  notes: String
});

const Lessons = new Schema({
    username: String,
    lesson_modules: {
      kinematics: {
        motion_in_one_dimension: {
          status: { type: Boolean, default: false },
          updated: Date,
          notes: String
        },
        motion_in_two_dimensions: {
          status: { type: Boolean, default: false },
          updated: Date,
          notes: String
        },
        simple_motion_in_one_dimension: {
          status: { type: Boolean, default: false },
          updated: Date,
          notes: String
        },
        simple_motion_in_two_dimensions: {
          status: { type: Boolean, default: false },
          updated: Date,
          notes: String
        }
      },
      forces: {
        friction_drag: {
          status: { type: Boolean, default: false },
          updated: Date,
          notes: String
        },
        newtons_law: {
          status: { type: Boolean, default: false },
          updated: Date,
          notes: String
        },
        simple_forces: {
          status: { type: Boolean, default: false },
          updated: Date,
          notes: String
        }
      },
      energy: {
        conservative_forces: {
          status: { type: Boolean, default: false },
          updated: Date,
          notes: String
        },
        energy_conservation_work: {
          status: { type: Boolean, default: false },
          updated: Date,
          notes: String
        },
        power: {
          status: { type: Boolean, default: false },
          updated: Date,
          notes: String
        },
        work_potential_energy: {
          status: { type: Boolean, default: false },
          updated: Date,
          notes: String
        }
      },
      momentum: {
        elastic_collisions: {
          status: { type: Boolean, default: false },
          updated: Date,
          notes: String
        },
        explosions: {
          status: { type: Boolean, default: false },
          updated: Date,
          notes: String
        },
        momentum_conservation: {
          status: { type: Boolean, default: false },
          updated: Date,
          notes: String
        }
      },
      simple_harmonic_motion: {
        damped_harmonic_motion: {
          status: { type: Boolean, default: false },
          updated: Date,
          notes: String
        },
        driven_oscillations: {
          status: { type: Boolean, default: false },
          updated: Date,
          notes: String
        },
        dynamics_simple_harmonic_motion: {
          status: { type: Boolean, default: false },
          updated: Date,
          notes: String
        },
        the_pendulum: {
          status: { type: Boolean, default: false },
          updated: Date,
          notes: String
        }
      },
      waves: {
        characteristics_waves: {
          status: { type: Boolean, default: false },
          updated: Date,
          notes: String
        },
        interference: {
          status: { type: Boolean, default: false },
          updated: Date,
          notes: String
        },
        superposition_of_waves: {
          status: { type: Boolean, default: false },
          updated: Date,
          notes: String
        }
      },
      fluids: {
        buoyancy: {
          status: { type: Boolean, default: false },
          updated: Date,
          notes: String
        },
        continuity: {
          status: { type: Boolean, default: false },
          updated: Date,
          notes: String
        },
        fluid_dynamics: {
          status: { type: Boolean, default: false },
          updated: Date,
          notes: String
        },
        incompressible_fluids: {
          status: { type: Boolean, default: false },
          updated: Date,
          notes: String
        },
        pressure: {
          status: { type: Boolean, default: false },
          updated: Date,
          notes: String
        }
      }
    }
});

module.exports = mongoose.model('lessons', Lessons);
