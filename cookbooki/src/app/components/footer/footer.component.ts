import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  // semiCircles: number[] = [];

  // ngOnInit(): void {
  //   this.updateSemiCircles();
  // }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event): void {
  //   this.updateSemiCircles();
  // }

  // updateSemiCircles(): void {
  //   let semiCircleWidth = 50
  //   const screenWidth = window.innerWidth;

  //   if(screenWidth < 1000){
  //     semiCircleWidth = 20
  //   } else if (screenWidth < 1200){
  //     semiCircleWidth = 35
  //   }

  //   const numSemiCircles = Math.ceil(screenWidth / semiCircleWidth);

  //   this.semiCircles = Array(numSemiCircles).fill(0);

  //   console.log(this.semiCircles)
  // }
}
