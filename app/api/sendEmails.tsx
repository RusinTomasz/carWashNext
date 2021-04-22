import axios from "axios";

interface IrregularitiesEmailBody {
  name: string;
  subject: string;
  email: string;
  message: string;
}

const sendIrregularitiesEmail = async (body: IrregularitiesEmailBody) => {
  const { name, subject, email: authorEmail, message } = body;

  try {
    const email = {
      name,
      subject,
      email: authorEmail,
      message,
    };

    await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/car-washes/sendemail/irregularities`,
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

export { sendIrregularitiesEmail };
