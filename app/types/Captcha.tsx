import ReCAPTCHA from "react-google-recaptcha";

export default interface CaptchaProps {
  recaptchaRef: React.RefObject<ReCAPTCHA>;
  isCaptchaVerified: boolean;
  onCaptchaChange: () => void;
}
