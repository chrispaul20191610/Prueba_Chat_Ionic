import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(
    private AfAuth: AngularFireAuth
  ) { }

  registerUser(value) {
    return new Promise<any>((resolve, reject) => {

      this.AfAuth.createUserWithEmailAndPassword(value.email, value.password)
        .then(
          
          res=>{
            resolve(res);
          }
          ).catch(err => reject(err));
    
    })

  }

  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.AfAuth.signInWithEmailAndPassword(value.email, value.password)
        .then(
          /* res => resolve(res),
          err => reject(err))
           */
           res=>{
            resolve(res);
          }
          ).catch(err => reject(err));


    })
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (this.AfAuth.currentUser) {
        this.AfAuth.signOut()
          .then(() => {
            console.log("LOG Out");
            resolve(0);
          }).catch((error) => {
            reject();
          });
      }
    })
  }

  userDetails() {
    return this.AfAuth.user
  }
}
