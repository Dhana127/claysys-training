import { Component, inject, OnInit, signal } from '@angular/core';
import { Apiservice } from '../../services/apiservice';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderDTO } from '../../order-dto';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inventoryaddpage',
  standalone:true,
  imports: [CommonModule,ReactiveFormsModule],
  providers:[HttpClient],
  styleUrl: './inventoryaddpage.css',
  template:`<div class="display-area">
    <div class="inside-display-area">
        <div class="merge-content-gap">
            <div class="content-display-area">
                <h3>Inventory</h3>
                <div class="left-display-area">
                    <label for="select-store">
                        <input type="text" class="input-options" list="browsers" name="browser" id="select-store-1" />
                        <label for="browser" id="select-store-1"></label>
                        <datalist id="browsers">
                            <option value="Bavaa Shop"></option>
                            <option value="The Chennai Mobiles"></option>
                            <option value="Apple"></option>
                            <option value="Redmi"></option>
                            <option value="Zudio"></option>
                        </datalist>
                    </label>
                    <div class="notification">
                        <img class="img-all-hw"
                            src="https://img.icons8.com/?size=100&id=0qxdKWVkmxjy&format=png&color=228BE6" alt="logo" />
                    </div>
                    <!-- .notification -->
                    <div class="profile-pic">
                        <img class="img-all-hw" src="https://img.icons8.com/?size=100&id=11730&format=png&color=000000"
                            alt="logo" />
                    </div>
                    <!-- .profile-pic -->
                </div>
                <!-- .left-display-area -->
            </div>
            <!-- .content-display-area -->
            <div class="path-div">
                <p><span>Home /</span> Inventory</p>
            </div>
            <!-- .path-div -->
        </div><!--.merge-content-gap-->

        <div class="form-to-add">
            <h1 class="formtoaddh1">Add Details</h1>
            <form [formGroup]="orderDatas"  (ngSubmit)="onSubmit($event)" >
                <div class="form-group">
                    <label for="order-id">Order Id:</label>
                    <input type="text" class="form-control" id="order-id" formControlName="orderId">
                </div>
                <div class="form-group">
                    <label for="customer-name">Customer Name:</label>
                    <input type="text" class="form-control" id="customer-name" formControlName="customerName">
                </div>
                <div class="form-group">
                    <label for="tracking-id">Tracking ID:</label>
                    <input type="text" class="form-control" id="tracking-id" formControlName="trackingId">
                </div>
                <div class="form-group">
                    <label for="order-date">Order Date:</label>
                    <input type="date" class="form-control" id="order-date" formControlName="orderDate">
                </div>
                <div class="form-group">
                    <label for="quantity">Quantity:</label>
                    <input type="number" class="form-control" id="quantity" formControlName="quantity">
                </div>
                <div class="form-group">
                    <label for="address">Location:</label>
                    <input type="text" class="form-control" id="address" formControlName="address">
                </div>
                <div class="form-group">
                    <label for="total-price">Total Price:</label>
                    <input type="number" class="form-control" id="total-price" formControlName="totalPrice">
                </div>
                <div class="form-group">
                    <label for="status">Status:</label>
                    <input type="text" class="form-control" id="status" formControlName="status">
                </div>
                <br>
                <button type="submit" class="btn btn-primary" >Submit</button>
            </form>
        </div>
        <!--#form-to-add-->

    </div><!--inside-display-area-->

</div>
<!-- .display-area -->`
})
export class Inventoryaddpage  {
  
  orderDatas=new FormGroup({
  orderId:new FormControl<number|null>(null,Validators.required),
  customerName:new FormControl('',Validators.required),
  trackingId:new FormControl('',Validators.required),
  orderDate:new FormControl('',Validators.required),
  quantity:new FormControl<number|null>(null,Validators.required),
  address:new FormControl('',Validators.required),
  totalPrice:new FormControl<number|null>(null,Validators.required),
  status:new FormControl('',Validators.required)
  });

  

  private api=inject(Apiservice);
  orders=signal<any[]>([]);
  onSubmit(event:Event){

    event.preventDefault();
  
    if(this.orderDatas.invalid){
    alert('Angular intercepted the form!');
    return;
    }
    
    const payload=this.orderDatas.value as OrderDTO;
    this.api.postOrderData(payload).subscribe({
      next:()=>alert('order added'),
      error:err=>alert('error: '+err.message)
    });
  
  }
}
