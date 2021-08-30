import ReCAPTCHA from "react-google-recaptcha";
import React from "react";

export default interface CaptchaProps {
  recaptchaRef: React.RefObject<ReCAPTCHA>;
  isCaptchaVerified: boolean;
  onCaptchaChange: () => void;
}
