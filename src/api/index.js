import axios from "axios";

export const sendMail = async (data) => {
  try {
    const { name, company, email, mobile } = data;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ name, company, email, mobile });
    const res = await axios.post(
      "http://localhost:5000/contact/mailer",
      body,
      config
    );

    console.log({ data: res.data });

    return { success: true, data: res.data };
  } catch (error) {
    console.log({ error });
    return { success: false, data: error.response.data.errors };
  }
};
