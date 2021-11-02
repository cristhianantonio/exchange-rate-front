import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {ExchangeRateServiceService} from './../../service/exchange-rate-service.service';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit {

  formSimulator: FormGroup = new FormGroup({
    monto: new FormControl('', [Validators.required]),
    monedaOrigen: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(3)]),
    monedaDestino: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'),
      Validators.maxLength(3)])
  });

  rs: any = null;

  constructor(private fb: FormBuilder, private service: ExchangeRateServiceService) {

  }


  ngOnInit(): void {
  }

  get f() {
    return this.formSimulator.controls;
  }

  execute() {
    const data = this.formSimulator.value;
    this.service.currencyExchange(data).subscribe(response => {
      console.log(response);
      this.rs = response;
    }, error => {
      alert(error)
      console.error(error)
    });
  }

}
