import { Component } from '@angular/core';
import { Address } from './address';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Address_Book';

  addresses : Address[] = [
    {Name:"Chirpus", Address:"123 Chirpus", isEditing: false},
    {Name:"Derpus", Address:"123 Derpus", isEditing: false}
  ];
  addressToEdit : Address = {Name:"", Address:"", isEditing: false};
  filteredAddresses : Address[] = this.addresses;
  addressToFilter : string = "";

  toggleDisplay(i : number) {
    this.addresses[i].isEditing = !this.addresses[i].isEditing
  }

  // Pass in index
  editAddress(num : number) : void {
    this.addresses[num] = this.addressToEdit;
    this.addressToEdit = {Name:"", Address:"", isEditing: false};
  }

  filterAddresses(input : string) : void {
    this.filteredAddresses = [];
    for (let i=0; i<this.addresses.length; i++)
    {
      if (this.addresses[i].Name.toLowerCase() == input.toLowerCase())
      {
        this.filteredAddresses.push(this.addresses[i]);
      }
    }
  }
  clearFilter() : void {
    this.filteredAddresses = this.addresses;
  }

}
