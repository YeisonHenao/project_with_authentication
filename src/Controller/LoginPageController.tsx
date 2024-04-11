export default class LoginPageController {

  /**
   * Función para ejecutar las diferentes validaciones de si una contraseña es segura y puede ser usada en la aplicación
   * @param password String -> cadena de caracteres a verificar si es una contraseña segura o no
   * @returns boolean -> Retorna un true o false si la contraseña ingresada es apta o no
   */
  validatePassword(password: string): boolean {
    if (password.length < 4) {
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
