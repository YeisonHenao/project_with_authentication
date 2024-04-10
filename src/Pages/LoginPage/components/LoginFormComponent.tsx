import { useState } from "react";
import { InputComponent } from '../../../components/StyleComponents/index'
import LoginPageController from "../../../Controller/LoginPageController";

export const LoginFormComponent: React.FC = () => {

  const controller = new LoginPageController();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email: string) => {
    const info: boolean = controller.validateEmail(email);
    if (!info) {
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
    const info: boolean = controller.validatePassword(password);
    if (!info) {
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
        type="password"
        value={password}
        onChange={handlePasswordChange}
        errorMessage={passwordError}
        />
    </div>
  );


}