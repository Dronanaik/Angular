export class Product {
    // products:{
    //     productId:number;
    //     productName:string;
    //     productPrice:number;
    //     productDescription:string;
    //     productImageUrl?:string;
    //   }
      constructor(public productId?: number, public productName?: string, public productPrice?: number,public productDescription?: string,public productImageUrl?:string) {
        // this.products = {
        //     productId: productId,
        //     productName: productName,
        //     productPrice: productPrice,
        //     productDescription:productDescription,
        //     productImageUrl:productImageUrl
        // };
      }
    
}
