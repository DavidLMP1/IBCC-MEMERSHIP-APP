import * as Yup from "yup";

export function initialValues() {
  return {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: "",
    phone: "",
    gender: "",
    civil_status: "",
  };
}

export function validationSchema() {
  return Yup.object({
    first_name: Yup.string().required("Este campo es necesario"),
    last_name: Yup.string().required("Este campo es necesario"),
    email: Yup.string()
      .email("El email no es correcto")
      .required("Este campo es necesario"),
    password: Yup.string().required("Este campo es necesario"),
    birthday: Yup.string().required("Este campo es necesario"),
    phone: Yup.string().required("Este campo es necesario"),
    gender: Yup.string().required("Este campo es necesario"),
    civil_status: Yup.string().required("Este campo es necesario"),
    // photo: Yup.string().required("Este campo es necesario"),
    // location: Yup.string().required("Este campo es necesario"),
    // role: Yup.string().required("Este campo es necesario"),
  });
}
