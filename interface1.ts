interface IAddress{
    street:string;
    suite:string;
    city:string;
    zipcode:number
}

interface IGeo{
    lat:string;
    lng:string;
}

interface ICompany{
   name:string;
   catchPhrase:string;
   bs:string; 
}

interface Idata{
    id:number;
    username:string;
    email:string;
    address:IAddress;
    geo:IGeo;
    phone:string;
    website:string;
    company:ICompany

}