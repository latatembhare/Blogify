import { Component } from '@angular/core';
import { Sub } from '../models/sub';
import { SubcriberService } from '../services/subcriber.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrl: './subscription-form.component.scss'
})
export class SubscriptionFormComponent {
  constructor(private sub:SubcriberService){}
  isEmailError :boolean = false
  isSubcribe : boolean = false
 onSubmit(form:Sub){
  console.log(form)
  const subData:Sub={
    name :form.name,
    email:form.email
  }
  this.sub.checkSubs(form.email).subscribe(val=>{
    if(val.empty){
      this.sub.addSubs(subData)
      this.isSubcribe = true
      this.isEmailError = false

    }
    else{
      this.isEmailError = true
    }
  })

}
}