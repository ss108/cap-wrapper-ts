import CAP from "./cap";

let instance: CAP;

export default function provideInstance(apiKey: string){
   if(instance){
       return instance;
   } 

   else {
       let c = new CAP(apiKey);
       return c;
   }
}