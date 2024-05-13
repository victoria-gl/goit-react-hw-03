import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useId } from "react";
import css from "./ContactForm.module.css";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters"),
  number: Yup.string()
    .required("Number is required")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters")
    .matches(/^\+?[0-9\s-]+$/, "Invalid phone number"),
});

const ContactForm = ({ onAddContact }) => {
  const nameField = useId();
  const numberField = useId();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        const newContact = {
          id: nanoid(),
          name: values.name
            .trim()
            .split(" ")
            .map((value) =>
              value[1]
                ? value[0].toUpperCase() + value.slice(1).toLowerCase()
                : value.toUpperCase()
            )
            .join(" "),
          number: values.number,
        };

        onAddContact(newContact);
        actions.resetForm();
      }}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.formGroup}>
          <label htmlFor={nameField}>Name</label>
          <Field
            className={css.formFiled}
            type="text"
            name="name"
            id={nameField}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.formGroup}>
          <label htmlFor={numberField}>Number</label>
          <Field
            className={css.formFiled}
            type="text"
            name="number"
            id={numberField}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <div className={css.formBtn}>
          <button className={css.btn} type="submit">
            Add Contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
