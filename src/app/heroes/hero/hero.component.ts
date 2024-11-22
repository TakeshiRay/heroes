import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase()
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`
  }

  changeHero(name: string): void{
    this.name = name
  }

  changeAge(age: number): void{
    this.age = age
  }

  reset(): void{
    // this.name = 'ironman'
    this.age = 45

    document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML = '<h1>Desde Angular</h1>';
    })
  }

}

