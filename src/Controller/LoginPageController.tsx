export default class LoginPageController {

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return false;
    } else {
      return true;
    }
  }

  validatePassword(password: string): boolean {
    if (password.length < 8) {
      return false; // Password is too short
    } else {
      return true; // Password meets the length requirement
    }
  }

  loginUser(username: string, password: string): boolean {
    if(username === 'admin' && password === 'admin'){
      return true;
    } else {
      return false
    }
  }

}
