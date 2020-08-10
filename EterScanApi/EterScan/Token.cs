namespace EterScan
{
    public class Token
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Symbol { get; set; }
        public string  ContractAddress { get; set; }
        public int TotalSupply { get; set; }
        public int TotalHolders { get; set; }
    }
}