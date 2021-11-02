import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ExchangeRateServiceService} from "../../service/exchange-rate-service.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  formUpdate: FormGroup = new FormGroup({
    idCurrency: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    exchangeRateOrigin: new FormControl('', [Validators.required]),
    exchangeRateDestination: new FormControl('', [Validators.required])
  });

  constructor(private fb: FormBuilder, private service: ExchangeRateServiceService) {
  }

  ngOnInit(): void {
  }

  get f() {
    return this.formUpdate.controls;
  }

  execute() {
    const data = this.formUpdate.value;
    this.service.updateCurrency(data).subscribe(response => {
      alert("Registro actualizado")
    }, error => {
      alert(error)
      console.error(error)
    });
  }
}
