import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  login() {
    // Aquí puedes añadir la lógica de autenticación
    // Por ahora, simplemente redireccionamos al usuario a otra página
    this.navCtrl.navigateForward('/home');
  }
}
