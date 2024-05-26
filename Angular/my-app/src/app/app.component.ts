import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 

  @Component({
  selector: 'app-root',
  imports:[
  CommonModule
  ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  export class AppComponent implements OnInit {
  devices: any[] = [];
  
    ngOnInit(): void {
    this.fetchData();
  }
  
  title = 'angular-waziup';
  
    fetchData() {
    console.log("Fetching devices...")
    fetch('https://api.waziup.io/api/v2/devices?q=owner==KipngenoVictor')
      .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
      .then(data => {
      this.devices = data;
      console.log(data);
    })
      .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  }
}
