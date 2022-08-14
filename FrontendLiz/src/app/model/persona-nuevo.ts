export class PersonaNuevo{
    id?: number;
    nombreP: string;
    apellidoP: string;
    imgP: string;
    positionP: string;
    aboutMeP: string;

    constructor(nombreP: string, apellidoP:string, imgP:string, positionP:string, aboutMeP:string){
        this.nombreP=nombreP;
        this.apellidoP=apellidoP;
        this.imgP=imgP;
        this.positionP=positionP;
        this.aboutMeP=aboutMeP;
    }
}