import { useState, useEffect, useRef } from "react";

// import { sendMail } from "../../../api";
import emailjs from "@emailjs/browser";

import * as Styles from "./styles";

const ContactForm = () => {
  let errors = useRef([]);
  const form = useRef();

  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState({
    name: "",
    company: "",
    email: "",
    mobile: "",
  });

  const { name, company, email, mobile } = inputValue;

  const [inputErrors, setInputErrors] = useState(null);

  const errChange = errors.current;

  useEffect(() => {
    setInputErrors(errors.current);
  }, [errChange]);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setInputValue({ ...inputValue, [name]: value });
    setInputErrors({ ...inputErrors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log({ inputValue });
    console.log({ form: form.current });
    emailjs
      .sendForm(
        "service_ifbucgn",
        "template_gryehv4",
        form.current,
        "ye7UvAtvh7-vkICwy"
      )
      .then(
        (result) => {
          console.log(result);
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
    // const res = await sendMail(inputValue);
    // if (res.success) {
    //   setSuccess(res.data);
    //   setInputValue({ name: "", company: "", email: "", mobile: "" });
    //   setLoading(false);

    //   setTimeout(() => {
    //     setSuccess(null);
    //   }, 6000);
    // } else if (!res.success) {
    //   let i = 0;
    //   while (i < res.data.length) {
    //     errors.current[res.data[i].param] = res.data[i].msg;
    //     setInputErrors({
    //       ...inputErrors,
    //       [res.data[i].param]: res.data[i].msg,
    //     });
    //     i++;
    //   }
    //   setLoading(false);
    // }
  };

  return (
    <Styles.Contaier>
      <Styles.FormHolder ref={form} onSubmit={(e) => handleSubmit(e)}>
        <Styles.RowHolder>
          <Styles.LabelHolder>Name</Styles.LabelHolder>
          <Styles.InputHolder
            name="name"
            type="text"
            value={name}
            onChange={(e) => handleChange(e)}
            error={inputErrors?.name}
            required
          />
          {inputErrors?.name ? (
            <Styles.ShowError>{inputErrors?.name}</Styles.ShowError>
          ) : null}
        </Styles.RowHolder>
        <Styles.RowHolder>
          <Styles.LabelHolder>Company</Styles.LabelHolder>
          <Styles.InputHolder
            name="company"
            type="text"
            value={company}
            onChange={(e) => handleChange(e)}
            error={inputErrors?.company}
            required
          />
          {inputErrors?.company ? (
            <Styles.ShowError>{inputErrors?.company}</Styles.ShowError>
          ) : null}
        </Styles.RowHolder>
        <Styles.RowHolder>
          <Styles.LabelHolder>Email</Styles.LabelHolder>
          <Styles.InputHolder
            name="email"
            type="email"
            value={email}
            onChange={(e) => handleChange(e)}
            error={inputErrors?.email}
            required
          />
          {inputErrors?.email ? (
            <Styles.ShowError>{inputErrors?.email}</Styles.ShowError>
          ) : null}
        </Styles.RowHolder>
        <Styles.RowHolder>
          <Styles.LabelHolder>Contact Details</Styles.LabelHolder>
          <Styles.InputHolder
            name="mobile"
            type="tel"
            value={mobile}
            onChange={(e) => handleChange(e)}
            error={inputErrors?.mobile}
            required
          />
          {inputErrors?.mobile ? (
            <Styles.ShowError>{inputErrors?.mobile}</Styles.ShowError>
          ) : null}
        </Styles.RowHolder>
        <Styles.Button
          success={success?.delivered}
          type="submit"
          disabled={success?.delivered}
        >
          {loading && !success?.delivered
            ? "Sending...."
            : !loading && success?.delivered
            ? "Sent Successfully"
            : "Send Message"}
        </Styles.Button>
      </Styles.FormHolder>
      <Styles.ShowSuccess>{success?.msg}</Styles.ShowSuccess>
    </Styles.Contaier>
  );
};

export default ContactForm;
