import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  user = {
    firstName:'',
    lastName:'',
    email:'',
    address:'',
    state:'',
    city:'',
    pincode:''
  }

  states = [
    'Tamil Nadu',
    'Karnataka',
    'Maharastra',
    'Andhra',
    'Kerala'
  ]

  cities = [
    'Chennai',
    'Bangalore',
    'Mumbai',
    'Hydrabad',
    'Cochi'
  ]

  userDetails = []

  constructor() { }

  ngOnInit() {
  }

  save(userForm) {
    const user = userForm.value
    this.userDetails = [{
      firstName : user.firstName,
      lastName:user.lastName,
      email:user.email,
      address: {
        address:user.address,
        state:user.state,
        city:user.city,
        pincode:user.pincode
      }
    }]

    console.log(userForm.value)
  }

  getOutput(firstNameModel) {
    console.log(firstNameModel)
  }

}
