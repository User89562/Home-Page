export class Colors {
    static purple(n: number): string {
        switch (n){
          case 2:
            return '#7c43bd';
          default:
            return '#9c4dcc';
        }
    }
    static indigo(n: number): string {
        switch (n){
          case 2:
            return '#534bae';
          default:
            return '#666ad1';
        }
    }
    static lightGreen(n: number): string {
        switch (n){
          case 2:
            return '#255d00';
          default:
            return '#4b830d';
        }
    }
    static green(n: number): string {
        switch (n){
          case 2:
            return '#00701a';
          default:
            return '#003d00';
        }
    }
    static blueGrey(n: number): string {
        switch (n){
          case 2:
            return '#102027';
          default:
            return '#1c313a';
        }
    }
    static cyan(n: number): string {
        switch (n){
          case 2:
            return '#005662';
          default:
            return '#007c91';
        }
    }
}
