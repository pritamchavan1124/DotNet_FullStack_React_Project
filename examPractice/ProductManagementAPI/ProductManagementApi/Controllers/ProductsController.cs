using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
namespace ProductController;
using BOL;
using DAL;

[ApiController]
[Route("api/[controller]")]

public class ProductsController:ControllerBase
{
     private readonly ILogger<ProductsController> _logger;

    public ProductsController(ILogger<ProductsController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    [EnableCors()]
    public IEnumerable<Product> GetAllUsers()
    {
        List<Product> products = UserDataAccess.GetAllProducts();
        return products;
    }

    [Route("{id}")]
    [HttpGet]
    [EnableCors()]

    public ActionResult<Product> GetOneProduct(int id){
        Product theprod=UserDataAccess.GetProductrById(id);
        return theprod;
    }
    
    [HttpPost]
    [EnableCors()]
    public IActionResult InsertNewProduct(Product prod)
    {
        UserDataAccess.SaveNewUser(prod);
        return Ok(new {message="Product inserted successfully"});
    }
    [Route("{id}")]
    [HttpDelete]
    [EnableCors()]
    
    public ActionResult<Product> DeleteProduct(int id){
        UserDataAccess.DeleteProductById(id);
        return Ok(new {message="Product Deleted successfully"});
    }

    //[Route("{id}")]
    [HttpPut]
    [EnableCors()]
    
    public ActionResult<Product> UpdateProduct(Product id){
        UserDataAccess.UpdateProduct(id);
        return Ok(new {message="Product Update successfully"});
    }





}