class Goal{
    value:string
    id:string

    constructor(value:string){
        this.value= value;
        this.id= new Date().toISOString();
    }
}
export default Goal;