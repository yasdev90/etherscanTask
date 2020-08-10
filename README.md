# etherscanTask

Overview
The purpose of the application is to create, update and show statistics for token information
Required Features:
1.	Create web form contains input form, pie chart and table (SINGLE PAGE APPLICATION)
 
2.	Required input field
a.	name = string
b.	symbol = string
c.	contract address = string
d.	total supply = integer
e.	total holders = integer
3.	Table should list all the tokens and able to edit (Please allow pagination and limit page size to 10)
4.	Save button should able to save new data or update existing data. 
5.	Show pie chart group by Name and total supply only.
6.	Pie Chart should show latest data after save or update.
7.	Add button to export the list to CSV format
8.	Make any additions to enhanced the stability / functionality of this application
9.	Keep the code clean, well-organized and well commented.



Database Structure
CREATE TABLE `token` (
`id` INT(11) NOT NULL AUTO_INCREMENT,
`symbol` VARCHAR(5) NOT NULL,
`name` VARCHAR(50) NOT NULL,
`total_supply` BIGINT(20) NOT NULL,
`contract_address` VARCHAR(66) NOT NULL,
`total_holders` INT(11) NOT NULL,
PRIMARY KEY (`id`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB;

Sample Data
INSERT INTO `token` VALUES (3, 'AST', 'Airswap', 5000000, '0x3434535349534859349', 34564356);
INSERT INTO `token` VALUES (5, 'BNB', 'Binance', 16579517, '0xB8c77482e45F1F44dE1745F52C74426C631bDD52', 4234234);
INSERT INTO `token` VALUES (4, 'MKR', 'Maker', 987133, '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2', 567);
INSERT INTO `token` VALUES (1, 'VEN', 'Vechain', 5987133, '0xd850942ef8811f2a866692a623011bde52a462c1', 65);
INSERT INTO `token` VALUES (2, 'ZIR', 'Zilliqa', 3272942, '0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27', 54);
