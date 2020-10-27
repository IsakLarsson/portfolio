import React, { useState } from "react";
import "../ContactSection/Contact.css";
import { TextField, makeStyles, Button } from "@material-ui/core";
import Plane from "../../images/icons/plane.svg";
import Uparrows from "../../images/icons/uparrows.svg";
import emailjs from "emailjs-com";

const useStyles = makeStyles({
  textField: {
    margin: "0.3rem",
    "& label": {
      color: "#ACACAC",
    },
    "& label.Mui-focused": {
      color: "#00C896",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#fff",
    },
    "& .MuiOutlinedInput-root": {
      width: "25rem ",

      ["@media (max-width:780px)"]: {
        width: "60vw",
      },
      backgroundColor: "#454545",
      "& fieldset": {
        borderColor: "#454545",
      },
      "&:hover fieldset": {
        borderColor: "#C8FCEA",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#C8FCEA",
      },
    },
  },
  sendButton: {
    color: "#00c896",
    borderColor: "#00c896",
    borderWidth: "2px",
    margin: "20px 0",
  },
});

const Contact = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  function sendMessage() {
    setError(false);
    setMessageError(false);
    let error = false;

    console.log(messageError, emailError);
    if (email.length === 0) {
      setError(true);
      error = true;
    }
    if (message.length === 0) {
      setMessageError(true);
      error = true;
    }
    if (!error) {
      var service_id = "my gmail";
      var template_id = "template_vyr8z8o";
      var user_id = "user_7QRMJ4JlEVSvNwdvDOMwE";
      console.log(message);
      emailjs.send(
        service_id,
        template_id,
        { from_name: email, message: message },
        user_id
      );
    }
    setEmail("");
    setMessage("");
  }

  return (
    <section className="contactSection">
      <div data-aos="fade-up" className="contactHeader">
        <h1>Now that you've gotten to know me</h1>
        <div className="contactP">
          <p>
            If you have a project to work on, or simply a question about me or
            my work. Don’t hesitate to get in touch, I’d love to hear from you!
          </p>
        </div>
      </div>

      <div data-aos="fade-up" className="contactForm">
        <TextField
          error={emailError}
          label="Email"
          id="custom-inputfield-email"
          className={classes.textField}
          variant="outlined"
          value={email}
          helperText={emailError ? "You must enter an email adress" : ""}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          InputProps={{
            style: {
              color: "#C8FCEA",
              fontFamily: "Raleway",
            },
          }}
        ></TextField>
        <TextField
          error={messageError}
          label="Your Message"
          id="custom-inputfield-email"
          variant="outlined"
          className={classes.textField}
          multiline
          rows={10}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
          helperText={
            messageError
              ? "Please enter a message, I don't want empty emails"
              : ""
          }
          InputProps={{
            style: {
              color: "#C8FCEA",
              fontFamily: "Raleway",
            },
          }}
        ></TextField>
        <Button
          variant="outlined"
          className={classes.sendButton}
          onClick={sendMessage}
        >
          <h3>SEND</h3>
          <img className="plane" src={Plane} alt=" "></img>
        </Button>
      </div>
      <div className="scrollArrows">
        <img src={Uparrows} />
      </div>
    </section>
  );
};

export default Contact;
