const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// TODO - get child schema to work properly and simplify code
const LessonProperties = new Schema({
  status: { type: Boolean, default: false },
  updated: { type: Date, default: new Date() },
  notes: { type: String, default: "" }
});

// Placeholder for normalizing database schema
const Lessons = new Schema({
  username: String,
  module_name: String,
  lesson_name: String,
  status: { type: Boolean, default: false },
  updated: { type: Date, default: new Date() },
  notes: { type: String, default: "" }
});

const Lessons = new Schema({
    username: String,
    lesson_modules: {
      motion_in_one_dimension: {
        position: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        speed: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        velocity: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        acceleration: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        special_cases: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        }
      },
      motion_in_two_dimensions: {
        two_dimensional_position: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        two_dimensional_velocity: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        two_dimensional_acceleration: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        projectile_motion: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        }
      },
      forces_and_the_laws_of_motion: {
        the_laws_of_motion: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        the_first_law_of_motion: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        the_second_law_of_motion: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        the_third_law_of_motion: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        common_forces: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        friction_and_drag: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
      },
      circular_motion: {
        circular_motion: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        }
      },
      work_and_energy: {
        conservative_forces: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        energy_conservation_and_work: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        work_and_potential_energy: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        power: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        }
      },
      linear_momentum_and_collisions: {
        momentum_conservation: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        elastic_collisions: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        explosions: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        }
      },
      rotational_motion_and_angular_momentum: {
        angular_variables: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        equations_of_rotational_motion: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        rotational_kinetic_energy: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        axis_theorems: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        torque: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        rotational_work_and_power: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        angular_momentum: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        }
      },
      oscillations: {
        dynamics_simple_harmonic_motion: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        the_pendulum: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        damped_harmonic_motion: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        driven_oscillations: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        }
      },
      waves_and_sounds: {
        characteristics_of_waves: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        superposition_of_waves: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        interference: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        }
      },
      electricity_and_magnetism: {
        electric_charge: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        electric_fields: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        electric_potential: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        magnetic_fields: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
        sources_of_magnetic_fields: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        }
      },
      fluid_mechanics: {
        pressure: {
          status: { type: Boolean, default: false },
          updated: { type: Date, default: new Date() },
          notes: { type: String, default: "" }
        },
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
        }
      }
    }
});

module.exports = mongoose.model('lessons', Lessons);
