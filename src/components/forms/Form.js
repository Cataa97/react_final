import { useFormik } from 'formik';
import validationSchema from './Validation';
import { Button, TextField} from '@mui/material';
import { Fragment } from 'react';

// credenciales: 
// email": "catalina.castillo19c@gmail.com",
//   "discordId": "334857790356979733"

const FormContact = () => {
  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
      email: '',

    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="nombre"
          name="nombre"
          label="Nombre"
          value={formik.values.nombre}
          onChange={formik.handleChange}
          error={formik.touched.nombre && Boolean(formik.errors.nombre)}
          helperText={formik.touched.nombre && formik.errors.nombre}
        />
        <TextField
          fullWidth
          id="apellido"
          name="apellido"
          label="Apellido"
          value={formik.values.apellido}
          onChange={formik.handleChange}
          error={formik.touched.apellido && Boolean(formik.errors.apellido)}
          helperText={formik.touched.apellido && formik.errors.apellido}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <Button color="secondary" variant="contained" fullWidth type="submit">
          Enviar
        </Button>
      </form>
    </Fragment>


  );
};

export default FormContact;
