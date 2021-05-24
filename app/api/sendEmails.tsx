import axios from "axios";

interface BasicEmailBody {
  formType: string;
  name: string;
  subject: string;
  email: string;
  message: string;
  regulations: string;
}

const sendBasicEmail = async (body: BasicEmailBody) => {
  const {
    formType,
    name,
    subject,
    email: authorEmail,
    message,
    regulations,
  } = body;

  try {
    const email = {
      formType,
      name,
      subject,
      email: authorEmail,
      message,
      regulations,
    };

    await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/car-washes/sendemail/basic`,
      email,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { sendBasicEmail };
