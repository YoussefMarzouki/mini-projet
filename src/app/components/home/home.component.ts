import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [FooterComponent]
})
export class HomeComponent implements OnInit {
  private ads: HTMLElement[] = [];
  private currentAd: number = 0;

  ngOnInit(): void {
    this.ads = Array.from(document.querySelectorAll('.ad')); // Get all ad elements
    this.showAd(this.currentAd); // Show the first ad initially
    setInterval(() => this.cycleAds(), 5000); // Change ad every 5 seconds
  }

  private showAd(index: number): void {
    this.ads.forEach((ad, i) => {
      ad.classList.remove('active');
      if (i === index) {
        ad.classList.add('active');
      }
    });
  }

  private cycleAds(): void {
    this.currentAd = (this.currentAd + 1) % this.ads.length; // Cycle through ads
    this.showAd(this.currentAd);
  }
}