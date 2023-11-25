import { Directive, Input } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appWordsCountValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: WordsCountValidatorDirective, multi: true}]
})
export class WordsCountValidatorDirective implements Validator {

Max: number=30;
  validate(control: AbstractControl): ValidationErrors | null{
//console.log('control value:', control.value);
//console.log('max words:', this.Max);


    if(!this.Max || this.Max<=0) return null; 


const value: string = control.value as string;

if(!value) return null; // jesli ciag znakow jest pusty, to nie ma blędu

const words=value.split(/\s+/).filter(word=>word.length>0)

if(words.length<=this.Max)  return null; // jesli liczba słow jest mniejsza, rowna maksymalnej liczbie slow, tez nie ma bledu

return {Max: {requiredWords: this.Max}};


  }
    
}


