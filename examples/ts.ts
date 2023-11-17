export interface Hero {
  name: string;
  id: string;
}

export class HeroService {
  private heroes: Hero[];

  public addHero(hero: Hero): void {
    this.heroes.push(hero);
  }

  /**
   * method for getting hero by id
   */
  public getHero(id: string): Hero | undefined {
    return this.heroes.find((hero) => hero.id === id);
  }

  public getHeroes(): Hero[] {
    return this.heroes;
  }
}

let heroService = new HeroService();

heroService.addHero({ id: "1qwe-2asd-3zxc", name: "Super Hero" });
heroService.addHero({ id: "1zxc-2asd-3qwe", name: "Cool Hero" });

let heroes = heroService.getHeroes();

let superHero = heroService.getHero("1qwe-2asd-3zxc");
console.log(superHero?.name);
