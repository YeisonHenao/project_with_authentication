export default class LoginPageController {

  /**
   * Función para ejecutar las diferentes validaciones de un correo valido para confirmar si este es apto
   * @param email String -> cadena de caracteres a verificar para saber si es un correo o no
   * @returns boolean -> Retorna un true o false para identificar si el correo es apto o no
   */
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * Función para ejecutar las diferentes validaciones de si una contraseña es segura y puede ser usada en la aplicación
   * @param password String -> cadena de caracteres a verificar si es una contraseña segura o no
   * @returns boolean -> Retorna un true o false si la contraseña ingresada es apta o no
   */
  validatePassword(password: string): boolean {
    if (password.length < 8) {
      return false; // Password is too short
    } else {
      return true; // Password meets the length requirement
    }
  }

  /**
   * Función para realizar el inicio de sesión a la aplicación web
   * @param username String -> correo de usuario ingresado
   * @param password String -> contraseña del usuario para acceder a la aplicación
   * @returns boolean -> Retorna un true o false para saber si el usuario puede acceder a la aplicación o no
   */
  loginUser(username: string, password: string): boolean {
    if(username === 'admin' && password === 'admin'){
      return true;
    } else {
      return false
    }
  }

}
