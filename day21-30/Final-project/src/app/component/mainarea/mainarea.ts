import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Apiservice } from '../../services/apiservice';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderDTO } from '../../order-dto';
import { filter } from 'rxjs';

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
  filteredOrders: OrderDTO[] = [];

  showEditModal=false;
  showAddModal=false;
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

  addForm=new FormGroup({
    orderId:new FormControl<number|null>(null,Validators.required),
    customerName:new FormControl('',Validators.required),
    trackingId:new FormControl('',Validators.required),
    orderDate:new FormControl('',Validators.required),
    quantity:new FormControl<number|null>(null,Validators.required),
    address:new FormControl('',Validators.required),
    totalPrice:new FormControl<number|null>(null,Validators.required),
    status:new FormControl('',Validators.required)
  })


  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.loading.set(true);
    this.api.getAllData().subscribe({
      next: data => {
        this.orders.set(data);
        this.filteredOrders = data;
        this.loading.set(false);
      },
      error: err => {
        this.error.set('Failed to load orders');
        this.loading.set(false);
      }
    });
  }
    
  
  onAdd(){
    this.showAddModal=true;
  }
  onEdit(order:any){
    this.selectedOrderId=order.orderId;
    this.editForm.patchValue(order);
    this.showEditModal=true;
  }
  closeModal(){
    this.showAddModal=false;
    this.showEditModal=false;
    this.editForm.reset();
    this.addForm.reset();
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

  submitAdd(){
    if(this.addForm.invalid)return;

    const AddOrder={
      ...this.addForm.value
    }

    this.api.postOrderData(AddOrder as OrderDTO).subscribe({
      next:()=>{
        alert('order Added');
        this.closeModal();
      },
      error:err=>alert('adding failed :'+err.message)
    })
  }

  onSearch(query: string) {
    
  this.orders.set( this.orders().filter(order =>
    order.customerName.toLowerCase().includes(query.toLowerCase()) ||
    order.orderId.toString().includes(query)
  )
)
}

filterByStatus(status: string) {
  const lowerStatus = status.toLowerCase();
   this.orders.set(this.orders().filter(order =>
    order.status.toLowerCase() === lowerStatus
  )
)
}

}