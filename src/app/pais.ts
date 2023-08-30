export class Pais {
    name!: {
        common: string,
        official: string
    };
    flags!: {
        png: string
    };
    region: string = '';
    population: number = 0;
    status: string = '';
    subregion: string = '';
}
