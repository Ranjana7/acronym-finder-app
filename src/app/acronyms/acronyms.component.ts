import { Component, OnInit } from '@angular/core';
import { IAcronym } from './acronym';
import { AcronymService } from './acronym.service';

@Component({
  selector: 'app-acronyms',
  templateUrl: './acronyms.component.html'
})
export class AcronymsComponent implements OnInit {

  errorMessage: string;
  searchAcronym: boolean = false;
  isAnchorFilter: boolean = false;
  addNewAcronyms: boolean = false;

      _listFilter: string;
      get listFilter(): string {
          return this._listFilter;
      }
      set listFilter(value: string) {
          this._listFilter = value;
          this.filteredAcronyms = this.listFilter ? this.performFilter(this.listFilter) : this.acronyms;
      }
  
      filteredAcronyms: IAcronym[];
      acronyms: IAcronym[] = [];
  
      constructor(private _acronymService: AcronymService) {
        this.filteredAcronyms = this.acronyms;        
      }
      performFilter(filterBy: string): IAcronym[] {
        filterBy = filterBy.toLocaleUpperCase();
        if(this.isAnchorFilter){
          return this.acronyms.filter((acronym: IAcronym) =>
          acronym.acronymName.toLocaleUpperCase().indexOf(filterBy) !== -1 && acronym.acronymName.toLocaleUpperCase().startsWith(filterBy));
        }
        return this.acronyms.filter((acronym: IAcronym) =>
        acronym.acronymName.toLocaleUpperCase().indexOf(filterBy) !== -1);
    }
    
    ngOnInit(): void {
      this._acronymService.getAcronyms()
              .subscribe(
                acronyms => {
                  this.acronyms = acronyms;
              },
                  error => this.errorMessage = <any>error);
    }

    search(): void {
      this.searchAcronym = true;
      this.addNewAcronyms = false;
    }

    add(): void {
   
    
      this.searchAcronym = false;
      this.filteredAcronyms = null;
      this.listFilter = null;
      this.addNewAcronyms = true;
    }

    anchorFilter(filter: string) : void {
      this.listFilter = filter;
      this.searchAcronym = true;
      this.isAnchorFilter=true;
      this.addNewAcronyms = false;
    }

     

}
