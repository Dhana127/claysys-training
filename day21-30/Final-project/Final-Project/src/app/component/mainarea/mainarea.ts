import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Apiservice } from '../../services/apiservice';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderDTO } from '../../order-dto';

@Component({
  selector: 'app-mainarea',
  standalone: true,
  imports: [CommonModule, RouterModule,ReactiveFormsModule],
  providers: [Apiservice],
  templateUrl: './mainarea.html',
  styleUrl: './mainarea.css',
})
export class Mainarea {
  private api = inject(Apiservice);
  loading = signal(true);
  error = signal<string | null>(null);
  orders = signal<any[]>([]);

  showModal=false;
  selectedOrderId:number|null=null;

  editForm=new FormGroup({
    customerName:new FormControl('',Validators.required),
    trackingId:new FormControl('',Validators.required),
    orderDate:new FormControl('',Validators.required),
    quantity:new FormControl<number|null>(null,Validators.required),
    address:new FormControl('',Validators.required),
    totalPrice:new FormControl<number|null>(null,Validators.required),
    status:new FormControl('',Validators.required)
  })

  ngOnInit(): void {
    this.api.getAllData().subscribe({
      next: data => {
        this.orders.set(data);
        this.loading.set(false);
      },
      error: err => {
        this.error.set('Failed to load orders');
        this.loading.set(false);
      }
    });
  }
  onEdit(order:any){
    this.selectedOrderId=order.orderId;
    this.editForm.patchValue(order);
    this.showModal=true;
  }
  closeModal(){
    this.showModal=false;
    this.editForm.reset();
  }
  submitEdit(){
    if(this.editForm.invalid || this.selectedOrderId===null)return;

    const updatedOrder={
      orderId:this.selectedOrderId,
      ...this.editForm.value
    }

    this.api.putStatusData(updatedOrder as OrderDTO).subscribe({
      next:()=>{
        alert('order updated');
        this.orders.set(this.orders().map(o=>o.orderId===this.selectedOrderId?updatedOrder:o));
        this.closeModal();
      },
      error:err=>alert('update failed :'+err.message)
    })
  }
  onDelete(orderId:number){
    if(confirm('Are you want to delete this order?')){
      this.api.deleteData(orderId).subscribe({
        next:()=>{
          alert("deleted successfully");
        },
        error:err=>{
          alert('Delete failed: '+err.message);
        }
      })
    }
  }

}