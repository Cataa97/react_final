
import * as yup from 'yup';

const validationSchema = yup.object({

    nombre: yup
        .string('Ingresa tu nombre')
        .min(2, 'Ingrese 2 carácteres como mínimo')
        .max(10, 'Ingrese 10 carácteres como máximo')
        .required('El nombre es obligatorio'),
    apellido: yup
        .string('Ingresa tu apellido')
        .min(2, 'Ingrese 2 carácteres como mínimo')
        .max(10, 'Ingrese 10 carácteres como máximo')
        .required('El apellido es obligatorio'),
    email: yup
        .string('Ingresa tur email')
        .email('Porfavor ingresa un email valido.')
        .required('El email es obligatorio'),
});




export default validationSchema;