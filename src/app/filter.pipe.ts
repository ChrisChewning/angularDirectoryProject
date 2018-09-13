import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ //Pipe decorator
  name: 'filter' //name of the pipe when we use it in the view. ex:  | filter
})

export class FilterPipe implements PipeTransform {

  transform(peoples: any, term: any): any { //transform method is called every time the pipe is used.

    //check if search term is undefined.
    if (term === undefined) return peoples; //if nothing is typed display all.
    //return updated company array.
    return peoples.filter(function(people){
      return people.company.toLowerCase().includes(term.toLowerCase());
    })
  }

}
