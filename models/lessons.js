const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// TODO - get child schema to work properly and simplify code
const LessonProperties = new Schema({
  status: { type: Boolean, default: false },
  updated: { type: Date, default: new Date() },
  notes: { type: String, default: "" }
});

const Lessons = new Schema({
    username: String,
    lesson_modules: {
      kinematics: {
        motion_in_one_dimension: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        motion_in_two_dimensions: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        simple_motion_in_one_dimension: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        simple_motion_in_two_dimensions: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        }
      },
      forces: {
        friction_drag: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        newtons_law: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        simple_forces: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        }
      },
      energy: {
        conservative_forces: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        energy_conservation_work: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        power: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        work_potential_energy: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        }
      },
      momentum: {
        elastic_collisions: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        explosions: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        momentum_conservation: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        }
      },
      simple_harmonic_motion: {
        damped_harmonic_motion: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        driven_oscillations: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        dynamics_simple_harmonic_motion: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        the_pendulum: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        }
      },
      waves: {
        characteristics_waves: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        interference: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        superposition_of_waves: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        }
      },
      fluids: {
        buoyancy: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        continuity: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        fluid_statics: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        fluid_dynamics: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        incompressible_fluids: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        pressure: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        }
      }
    }
});

module.exports = mongoose.model('lessons', Lessons);
