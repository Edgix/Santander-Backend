const mongoose = require("mongoose");

const SolicitudSchema = new mongoose.Schema({
  fecha: {type: Date },//Fecha de la solicitud
  mascota: {type: mongoose.Schema.Types.ObjectId, ref: 'Mascota'}, // Mascota a adoptar
  interesado: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'}, // contacto con la persona que quiere al animalito
  anunciante: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'} // contacto con la persona que anuncia al animalito
}, { timestamps: true , collection : 'mascotas'})

SolicitudSchema.methods.publicData = function(){
  return {
    id: this.id,
    nombre: this.nombre,
    fecha: this.categoria,
    fotos: this.fotos,
    interesado: this.descripcion,
    anunciante: this.anunciante,
    ubicacion: this.ubicacion,
  };
};

mongoose.model('Mascota', SolicitudSchema)