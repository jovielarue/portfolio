import emailSvg from "../../assets/email.svg";

export default function Contact() {
  return (
    <>
      <h1 className={"contact-header"}>contact me</h1>
      <a href={"mailto:jovie.larue@edu.sait.ca"}>
        <img src={emailSvg} />
      </a>
    </>
  );
}
