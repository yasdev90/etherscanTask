using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MySqlConnector;

namespace EterScan.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TokenController : ControllerBase
    {
        // GET: api/Token
        [HttpGet]
        public  async Task<IEnumerable<Token>> Get()
        {
            var getAllTokensCommand = new MySqlCommand("SELECT Id, Name, Symbol, Contract_Address, Total_Supply, Total_Holders FROM Token");
            return await Task.Run(()=> DBConnecter.ExecuteQuery(getAllTokensCommand));
        }

        // POST: api/Token
        [HttpPost]
        public ActionResult Post(Token token)
        {
            if (token != null)
            {
                var addTokenCommand = new MySqlCommand("INSERT INTO Token(Name, Symbol, Contract_address, total_supply, total_holders) VALUES( @name, @symbol, @contractAddress, @totalSupply, @totalHolders);");
                addTokenCommand.Parameters.AddWithValue("@name", token.Name);
                addTokenCommand.Parameters.AddWithValue("@symbol", token.Symbol);
                addTokenCommand.Parameters.AddWithValue("@contractAddress", token.ContractAddress);
                addTokenCommand.Parameters.AddWithValue("@totalHolders", token.TotalHolders);
                addTokenCommand.Parameters.AddWithValue("@totalSupply", token.TotalSupply);
                if (DBConnecter.ExecuteCommand(addTokenCommand))
                {
                    return Ok(Get());
                }
            }
            return BadRequest();
        }

        // PUT: api/Token/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Token token)
        {
            if (token != null)
            {
                var addTokenCommand = new MySqlCommand("UPDATE Token SET Name = @name, Symbol = @symbol, Contract_address =  @contractAddress, total_supply = @totalSupply, total_holders = @totalHolders WHERE id = @id;");
                addTokenCommand.Parameters.AddWithValue("@id", id);
                addTokenCommand.Parameters.AddWithValue("@name", token.Name);
                addTokenCommand.Parameters.AddWithValue("@symbol", token.Symbol);
                addTokenCommand.Parameters.AddWithValue("@contractAddress", token.ContractAddress);
                addTokenCommand.Parameters.AddWithValue("@totalHolders", token.TotalHolders);
                addTokenCommand.Parameters.AddWithValue("@totalSupply", token.TotalSupply);
                DBConnecter.ExecuteCommand(addTokenCommand);
                return Ok(Get());
            }
            return BadRequest(Get());
        }
    }
}
