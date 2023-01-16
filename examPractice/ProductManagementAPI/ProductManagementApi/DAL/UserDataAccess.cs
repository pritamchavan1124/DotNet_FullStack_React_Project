namespace DAL;
using BOL;
using System.Data;
using MySql.Data.MySqlClient;

public class UserDataAccess
{

    public static string conString = @"server=localhost;port=3306;user=root;password=root123;database=krushiapp";

    public static List<Product> GetAllProducts()
    {
        List<Product> allNotes = new List<Product>();
        MySqlConnection con = new MySqlConnection(conString);

        try
        {
            string query = "select * from products";
            DataSet ds = new DataSet();
            MySqlCommand cmd = new MySqlCommand(query, con);
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(ds);

            DataTable dt = ds.Tables[0];
            DataRowCollection rows = dt.Rows;
            foreach (DataRow row in rows)
            {
                Product prod = new Product
                {
                    ProdId = int.Parse(row["ProdId"].ToString()),
                    ProdTitle=row["ProdTitle"].ToString(),
                    ProdCategory = row["ProdCategory"].ToString(),
                    ProdDesc = row["ProdDesc"].ToString(),
                    ProdPrice = int.Parse(row["ProdPrice"].ToString()),
                    ProdQty = int.Parse(row["ProdQty"].ToString())
                };
                allNotes.Add(prod);
            }
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        return allNotes;
    }
    public static Product GetProductrById(int id)
    {
        Product prod = null;
        MySqlConnection con = new MySqlConnection(conString);

        try
        {
            con.Open();
            string query = "select * from products where ProdId=" + id;
            MySqlCommand command = new MySqlCommand(query, con);
            MySqlDataReader reader = command.ExecuteReader();

            if (reader.Read())
            {
                prod = new Product
                {
                    ProdId = int.Parse(reader["ProdId"].ToString()),
                    ProdCategory = reader["ProdCategory"].ToString(),
                    ProdDesc = reader["ProdDesc"].ToString(),
                    ProdPrice = int.Parse(reader["purchasedate"].ToString()),
                    ProdQty = int.Parse(reader["ProdQty"].ToString())
                };
            }

        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            con.Close();
        }
        return prod;
    }
    public static void SaveNewUser(Product prod)
    {
        MySqlConnection con = new MySqlConnection(conString);

        try
        {
            con.Open();
            string query = $"insert into products(ProdTitle,ProdCategory,ProdDesc,ProdPrice,ProdQty) values('{prod.ProdTitle}', '{prod.ProdCategory}', '{prod.ProdDesc}','{prod.ProdPrice}','{prod.ProdQty}')";
            MySqlCommand command = new MySqlCommand(query, con);
            command.ExecuteNonQuery();
            con.Close();
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            con.Close();
        }


    }
    public static void DeleteProductById(int id)
    {
        MySqlConnection con = new MySqlConnection(conString);

        try
        {
            con.Open();
            string query = "delete from products where ProdId =" + id;
            MySqlCommand command = new MySqlCommand(query, con);
            command.ExecuteNonQuery();
            con.Close();
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            con.Close();
        }
    }

        public static void UpdateProduct(Product prod)
    {
        MySqlConnection con = new MySqlConnection(conString);

        try
        {
            con.Open();
            string query = $"update products set ProdTitle='{prod.ProdTitle}' ,ProdCategory='{prod.ProdCategory}' ,ProdDesc='{prod.ProdDesc}' ,ProdPrice='{prod.ProdPrice}' ,ProdQty='{prod.ProdQty}' where ProdId='{prod.ProdId}'";
            MySqlCommand command = new MySqlCommand(query, con);
            command.ExecuteNonQuery();
            con.Close();
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            con.Close();
        }


    }

}