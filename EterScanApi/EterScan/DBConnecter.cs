using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Data;

namespace EterScan
{    
    public class DBConnecter
    {
        static string ConnectionString = "Data Source=localhost;Initial Catalog=test;User ID=root;Password=1234;";
        public static bool ExecuteCommand(MySqlCommand command)
        {
            try
            {
                using (var connection = new MySqlConnection(ConnectionString))
                {
                    connection.Open();
                    command.Connection = connection;
                    var linesChanged = command.ExecuteNonQuery();
                    connection.Close();
                    return linesChanged > 0;
                }
            }
            catch (Exception ex)
            {

            }
            return false;
        }

        public static List<Token> ExecuteQuery(MySqlCommand query)
        {
            var resultData = new List<Token>();
            try
            {
                if (!string.IsNullOrEmpty(query.CommandText))
                {
                    using (var connection = new MySqlConnection(ConnectionString))
                    {
                        connection.Open();
                        query.Connection = connection;
                        using (var reader = query.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                var token = new Token
                                {
                                    Id = reader.GetInt32(0),
                                    Name = reader.GetString(1),
                                    Symbol = reader.GetString(2),
                                    ContractAddress = reader.GetString(3),
                                    TotalSupply = reader.GetInt32(4),
                                    TotalHolders = reader.GetInt32(5),
                                };
                                resultData.Add(token);
                            }
                        }
                        connection.Close();
                        return resultData;
                    }
                }
                return resultData;
            }
            catch (Exception ex)
            {

            }
            return resultData;
        }
    }
}
