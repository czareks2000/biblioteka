import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateReturnDateService {
private returnDate: Date | null;
  constructor() { 
    this.returnDate=null;
  }

  public calculateReturnDate(date: Date | undefined): Date{
    if(date==undefined){
      date=new Date();
    }
    this.returnDate=new Date(date.getTime()+14 * 24 * 60 * 60 * 1000);

    if(this.returnDate.getDay()===0){
      this.returnDate=new Date(this.returnDate.getTime()+24*60*60*1000);
    }
    return this.returnDate;
  }
}
