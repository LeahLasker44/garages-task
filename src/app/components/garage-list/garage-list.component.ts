import { Component, OnInit } from '@angular/core';
import { Garage } from 'src/app/models/garage.model';
import { GarageService } from 'src/app/services/garage.service';
import { AreaService } from 'src/app/services/area.service';


@Component({
  selector: 'app-garage-list',
  templateUrl: './garage-list.component.html',
  styleUrls: ['./garage-list.component.scss']
})
export class GarageListComponent implements OnInit {

  cityFilter: string = '';
  selectedArea: string = '';
  garages: Garage[] = [];
  areas: string[] = [];
  isLoading: boolean = true;


  constructor(private garageService: GarageService, private areaService: AreaService) { }

  ngOnInit(): void {
    this.loadGarages();
    this.loadAreas();
  }

  loadGarages(): void {
    this.isLoading = true;
    this.garageService.getGarages(this.cityFilter, this.selectedArea).subscribe(
      (response) => {
        this.garages = response.Data.GaragesList.sort((a: Garage, b: Garage) =>
          a.Name.localeCompare(b.Name)
        );
        this.isLoading = false;
      },
      (error) => {
        console.error('Failed to loading garages', error);
        this.isLoading = false;
      }
    );
  }

  loadAreas(): void {
    this.areaService.getAreas().subscribe(
      (response: any) => {
        if (response.Data) {
          this.areas = response.Data;
        }
      },
      (error) => {
        console.error('Failed to loading areas', error);
      }
    );
  }

  onFilterChange(): void {
    this.loadGarages();
  }

}
