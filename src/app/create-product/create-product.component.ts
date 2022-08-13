import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  message: string = '';
  constructor() {}

  ngOnInit(): void {}

  createProduct(productForm: { valid: any; value: any }) {
    console.log('stockForm', productForm.value);
    if (productForm.valid) {
      console.log('Creating stock');
    } else {
      this.message = 'Ensure all fields are valid';
      console.error('Stock form is in an invalid state', productForm);
    }
  }
}
