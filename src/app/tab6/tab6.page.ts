import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit {

  @ViewChild('myChart') canvas;

  chart: any;

   // array for the editable data
  numbers = [
  "Usage: 21%", 
  "Damage Range: 110 - 203", 
  "Requirements Range: 10 strength - 50 strength; 10 - 18 Dexterity", 
  "Scaling: Mainly Strength E - B; Dexerity (some) E - D"
  ];

  constructor(private router: Router, private storage: Storage) { 
    
  }

  // Add information to the stats page
  addNumber () {
    let number = prompt ("Add Attribute to Axe weapon Class")
    this.numbers.push(number);
  }
  // Edit information on the stats page
  editNumber(index) {
    let stat = prompt("Change Stat", this.numbers[index]);
    this.numbers[index] = stat;
  }
  // delete information on stats page
  deleteNumber(index) {
    if (confirm("Delete " + this.numbers[index] + "?")) {
      this.numbers.splice(index, 1) ;
    }
  }
  // allows user to upload their own image
  imageFile;

  imageSelected(files) {
    let fileReader = new FileReader();

    fileReader.onload = e => {
      this.imageFile = fileReader.result;
      this.storage.set('avatar', this.imageFile);
      this.storage.get('avatar').then(val => {
        this.imageFile = val;
      });
    };

    fileReader.readAsDataURL(files[0]);

    // Graph data and paramaters
  }
weaponUsage = [21, 68, 11]
  ngOnInit() {
    this.chart = new Chart(this.canvas.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: ["Axe", "Swords", "Bows"],
        datasets:[{
          label: 'Weapon Usage (%)',
          data: [21, 68, 11],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1  
        }]
      }
    });
    this.chart.update();
  }
}
