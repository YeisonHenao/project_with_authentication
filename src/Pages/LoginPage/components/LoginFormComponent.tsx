import { useState } from "react";
import { InputComponent } from "../../../components/StyleComponents/InputComponent";

export const LoginFormComponent: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Correo electrónico inválido");
    } else {
      setEmailError("");
    }
  }

  const handleEmailChange = (email: string) => {
    setEmail(email);
    validateEmail(email);
  }

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres");
    } else {
      setPasswordError("");
    }
  }

  const handlePasswordChange = (password: string) => {
    setPassword(password);
    validatePassword(password);
  }

  return (
    <div>
      <InputComponent
        label="Correo electrónico"
        value={email}
        onChange={handleEmailChange}
        errorMessage={emailError}
      />
      <InputComponent
        label="Contraseña"
        value={password}
        onChange={handlePasswordChange}
        errorMessage={passwordError}
        />
    </div>
  );


}