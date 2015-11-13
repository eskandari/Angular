using APM.WebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.OData;

namespace APM.WebAPI.Controllers
{
    //[EnableCorsAttribute("http://54.68.71.220/PRS", "*", "*")]
    [EnableCorsAttribute("http://localhost:15209", "*", "*")]
    public class ProductsController : ApiController
    {
        // GET: api/Products
    //[EnableQuery(PageSize = 30, AllowedQueryOptions = AllowedQueryOptions.Skip)]
        [EnableQuery(PageSize = 30)]
        public IQueryable<Product> Get()
        {
            var productRepository = new ProductRepository();
            return productRepository.Retrieve().AsQueryable();
        }

        public IEnumerable<Product> Get(string search)
        {
            var productRepository = new ProductRepository();
            var products = productRepository.Retrieve();
            var result = products.Where(p => p.ProductCode.Contains(search));
            return result;
        }

        // GET: api/Products/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Products
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Products/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Products/5
        public void Delete(int id)
        {
        }
    }
}
