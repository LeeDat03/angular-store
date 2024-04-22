import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { ProductsHeaderComponent } from "./components/products-header/products-header.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, ProductsHeaderComponent],
  templateUrl: "./home.component.html",
  styles: ``,
})
export class HomeComponent {
  showFiller = false;
  cols = 3;

  onColumnsCountChange(colsNumber: number): void {
    this.cols = colsNumber;
  }
}
