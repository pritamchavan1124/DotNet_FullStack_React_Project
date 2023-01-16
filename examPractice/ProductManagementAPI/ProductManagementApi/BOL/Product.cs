namespace BOL;
using System;
using System.ComponentModel.DataAnnotations;
public class Product
{
    
     public int ProdId{get;set;}

     public string ProdTitle{get;set;}

     public string ProdCategory {get;set;}
     public string ProdDesc {get;set;}
     public int ProdPrice {get;set;}

     public  int ProdQty {get;set;}
}