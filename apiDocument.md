# Live Links

# Page 1

## API to get list of categories

local: http://localhost:2500/categories/
live: https://amazon-clone-urw3.onrender.com/categories

## API to get list of all items of any category

local: http://localhost:2500/categories/books, http://localhost:2500/categories/home_and_kitchen ...etc
live: https://amazon-clone-urw3.onrender.com/categories/books, https://amazon-clone-urw3.onrender.com/categories/home_and_kitchen ...

## API to get list of all items in sub_category(fashion)(11-men's clothes,12-women's,13-kids clothes)

local: http://localhost:2500/fashion/11, http://localhost:2500/fashion/12, http://localhost:2500/fashion/13
live: https://amazon-clone-urw3.onrender.com/fashion/11

## API to get list of all items in sub_category(electronics)(31-Mobiles, 32-Laptops, 33-Electronic Accessories, 34-Tvs)

local: http://localhost:2500/electronics/31, http://localhost:2500/electronics/32, http://localhost:2500/electronics/33, http://localhost:2500/electronics/34

live: https://amazon-clone-urw3.onrender.com/electronics/31

# Page 2

## API for particular item details

local: http://localhost:2500/product/books?item_id=3
live: https://amazon-clone-urw3.onrender.com/product/books?item_id=3

## filtered API wrt popularity(stars)

local: http://localhost:2500/filter/by-stars/kids_clothes
live: https://amazon-clone-urw3.onrender.com/filter/by-stars/kids_clothes 

## filtered API wrt price (ascending and descending sort)

local: http://localhost:2500/filter/by-price/home_and_kitchen?lcost=200&hcost=500
ascending : http://localhost:2500/filter/by-price/home_and_kitchen
descending : http://localhost:2500/filter/by-price/home_and_kitchen?sort=-1

live: https://amazon-clone-urw3.onrender.com/filter/by-price/home_and_kitchen?lcost=200&hcost=500

## filtered API wrt discount

local: localhost:2500/filter/by-discount/books/20
live: https://amazon-clone-urw3.onrender.com/filter/by-discount/books/20

# Page 3

## API to place order

local : localhost:2500/placeOrder
live: https://amazon-clone-urw3.onrender.com/placeOrder

JSON=>{
"orderId":5,
"name":"Andrew",
"email":"drew12@yahoo.com",
"address":"7th cross,Subash Road",
"phone":9967754346,
"cost":987,
"items":[3,6,8]
}

# Page 4

## API for getting all the orders for an email

local : localhost:2500/orders?email=sharat@yahoo.com
live : https://amazon-clone-urw3.onrender.com/orders?email=sharat@yahoo.com
 
## API for updating order wrt product ids

local: localhost:2500/updateOrder/3
live : https://amazon-clone-urw3.onrender.com/updateOrder/3

JSON=> {
"status":"pending",
"bank_name":"Canara Bank",
"date":"12/3/2022"
}

## API for deleting an order
local: localhost:2500/deleteOrder/636b7dc8a50f31223a056f75
live : https://amazon-clone-urw3.onrender.com/deleteOrder/636b7dc8a50f31223a056f75