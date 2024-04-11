import { useState } from "react";
import { InputComponent, ButtonGeneric } from '../../../components/StyleComponents/index'
import LoginPageController from "../../../Controller/LoginPageController";

export const LoginFormComponent: React.FC = () => {

  const controller = new LoginPageController();

  //Definición de estados del componente
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  /**
   * Función que envia al controlador el correo para validar la información para decir si el campo es valido o no
   * @param email String -> String ingresado en el input de email para validarse
   */
  const validateEmail = (email: string) => {
    const info: boolean = controller.validateEmail(email);
    if (!info) {
      setEmailError("Correo electrónico inválido");
    } else {
      setEmailError("");
    }
  }

  /**
   * Función para validar los cambios de estado del input de correo para realizar validaciones del campo
   * @param email String -> Correo del usuario ingresado en el input
   */
  const handleEmailChange = (email: string) => {
    setEmail(email);
    validateEmail(email);
  }

  /**
   * Función que envia al controlador la contraseña para validar la información para decir si el campo es valido o no
   * @param password String -> String ingresado en el input de password para validarse
   */
  const validatePassword = (password: string) => {
    const info: boolean = controller.validatePassword(password);
    if (!info) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres");
    } else {
      setPasswordError("");
    }
  }

  /**
   * Función para escuchar cambios en el input de contraseña para realizar las validaciones del campo
   * @param password String -> Contraseña ingresada por el usuario en el input
   */
  const handlePasswordChange = (password: string) => {
    setPassword(password);
    validatePassword(password);
  }

  /**
   * Función para iniciar sesión en la aplicación
   */
  const handleLogin = () => {
    const info: boolean = controller.loginUser(email,password)
    if(!info){
      alert("No puedes acceder")
    } else {
      alert("Bienvenido")
    }
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
        <ButtonGeneric 
          text="Ingresar"
          OnClick={handleLogin}
        />
    </div>
  );


}