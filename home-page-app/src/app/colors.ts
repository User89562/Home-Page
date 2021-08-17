export class Colors {
    static red(n: number): string {
        switch (n){
          case 2:
            return '#ff8a80';
          default:
            return '#ffcdd2';
        }
    }
    static purple(n: number): string {
      switch (n){
        case 2:
          return '#ea80fc';
        default:
          return '#e1bee7';
      }
    }
  static indigo(n: number): string {
    switch (n){
      case 2:
        return '#8c9eff';
      default:
        return '#c5cae9';
    }
  }
  static green(n: number): string {
    switch (n){
      case 2:
        return '#b9f6ca';
      default:
        return '#c8e6c9';
    }
  }
  static light_blue(n: number): string {
    switch (n){
      case 2:
        return '#80d8ff';
      default:
        return '#b3e5fc';
    }
  }
  static teal(n: number): string {
    switch (n){
      case 2:
        return '#a7ffeb';
      default:
        return '#b2dfdb';
    }
  }
}
